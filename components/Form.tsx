import { FC, FormEvent, useRef, useState } from 'react'
import { useSession } from 'next-auth/react'
import dompurify from 'dompurify'
import { useSWRConfig } from 'swr'

const Form: FC = () => {
  const { data: session, status } = useSession()
  const { mutate } = useSWRConfig()
  const content = useRef<HTMLTextAreaElement>(null)
  const [visible, setVisible] = useState(false)
  const [error, setError] = useState(false)

  const createPost = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    const raw = JSON.stringify({
      content: dompurify.sanitize(content.current?.value!),
    })

    const requestOptions: RequestInit = {
      method: 'POST',
      headers: headers,
      body: raw,
    }

    try {
      await fetch('/api/new', requestOptions)

      setVisible(true)
      content!.current!.value = ''
      mutate('/api/posts')
    } catch (err) {
      setError(true)
      console.error(err)
    }
  }

  return (
    <div>
      {session ? (
        <form className='w-full mb-16' onSubmit={(e) => createPost(e)}>
          <textarea
            placeholder='Go ahead, say what you like!'
            maxLength={100}
            ref={content}
            className='w-full mt-8 bg-gray-800 rounded-md border-gray-700 border-2 p-5 resize-y font-sans text-base text-white box-border'
          />
          {visible && (
            <p className='text-green-400'>
              🎉 Thanks for signing the guestbook!
            </p>
          )}
          {error && (
            <p className='text-rose-400'>😅 An error occured, try again!</p>
          )}
          <p className='my-8'>
            Keep it family friendly, don&apos;t be a doofus. The only
            information displayed on this site will be the name on your account,
            and when you create this post.
          </p>
          <button
            className='text-gray-900 bg-white px-8 py-3 text-lg rounded border-2 border-solid border-white hover:bg-gray-900 hover:text-white duration-200'
            type='submit'
          >
            Sign
          </button>
        </form>
      ) : (
        <div className='bg-gray-800 p-5 flex flex-col items-center rounded my-16'>
          <h3 className='my-0'>Sign the Guestbook</h3>
          <p className='mt-5 mb-0'>
            🎉 Login to share a message for a future visitor on this page
          </p>
        </div>
      )}
    </div>
  )
}

export default Form

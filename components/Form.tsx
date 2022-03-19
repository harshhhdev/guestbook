import { FC, FormEvent, useRef } from 'react'
import { useSession } from 'next-auth/react'
import dompurify from 'dompurify'

const Form: FC = () => {
  const { data: session, status } = useSession()
  const content = useRef<HTMLTextAreaElement>(null)

  const createPost = (e: FormEvent<HTMLFormElement>) => {
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

    fetch('/api/new', requestOptions)
      .then((response) => response.json())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
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
          <p className='my-8'>
            Keep it family friendly, don&apos;t be a doofus. The only
            information displayed on this site will be the name on your account,
            and when you create this post.
          </p>
          <button
            className='text-gray-900 bg-white px-8 py-3 text-lg rounded border-2 border-solid border-white hover:bg-gray-900 hover:text-white duration-200 focus:ring-3'
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

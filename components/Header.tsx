import { FC } from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

const Header: FC = () => {
  return (
    <div className='flex flex-col'>
      <Login />
      <h1 className='mt-16 mb-5'>Harsh&apos;s Guestbook</h1>
      <p>
        Welcome to Harsh&apos;s Guestbook. This a rebuild of{' '}
        <a
          href='https://leerob.io/guestbook'
          target='_blank'
          rel='noreferrer'
          className='underline'
        >
          @leerob&apos;s guestbook
        </a>{' '}
        using{' '}
        <a href='https://dev.to/harshhhdev/building-a-serverless-application-with-nextjs-and-cockroachdb-3pm5' className='underline'>
          serverless technologies
        </a>
        . Leave a comment below, it can be totally random 👇
      </p>
    </div>
  )
}

const Login: FC = () => {
  const { data: session, status } = useSession()

  if (session)
    return (
      <div className='flex items-center'>
        <Image
          src={session?.user?.image!}
          alt='Profile'
          className='rounded-full'
          width={48}
          height={48}
        />
        <a href='#' className='text-xl ml-5' onClick={() => signOut()}>
          Logout
        </a>
      </div>
    )
  else
    return (
      <a href='#' className='text-xl' onClick={() => signIn('github')}>
        Login With GitHub
      </a>
    )
}

export default Header

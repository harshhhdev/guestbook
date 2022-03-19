import '@css/tailwind.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'

const Guestbook = ({ Component, pageProps }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default Guestbook

import { FC } from 'react'
import Head from 'next/head'

const SEO: FC = () => {
  return (
    <Head>
      <title>Harsh&apos;s Guestbook</title>
      <meta property='og:title' content="Harsh's Guestbook" />
      <meta property='twitter:title' content="Harsh's Guestbook" />
      <meta
        name='description'
        content="Welcome to Harsh's Guestbook. This a rebuild of @leerob's guestbook using serverless technologies, for the purposes of showing how to migrate a live PostgreSQL application onto CockroachDB serverless. Users can leave supportive, humorous or random message for any future visitors of this website."
      />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://debutur.herokuapp.com/' />
      <meta
        property='og:description'
        content="Welcome to Harsh's Guestbook. This a rebuild of @leerob's guestbook using serverless technologies, for the purposes of showing how to migrate a live PostgreSQL application onto CockroachDB serverless. Users can leave supportive, humorous or random message for any future visitors of this website."
      />
      <meta property='twitter:url' content='https://debutur.herokuapp.com/' />
      <meta
        property='twitter:description'
        content="Welcome to Harsh's Guestbook. This a rebuild of @leerob's guestbook using serverless technologies, for the purposes of showing how to migrate a live PostgreSQL application onto CockroachDB serverless. Users can leave supportive, humorous or random message for any future visitors of this website."
      />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
      <meta name='theme-color' content='#0da7ee' />
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🖖</text></svg>'
      />
    </Head>
  )
}

export default SEO

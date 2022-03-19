import type { GetServerSideProps, NextPage } from 'next'

import prisma from '@lib/prisma'
import { PostWithUser } from '@typings/index'

import SEO from '@components/SEO'
import Header from '@components/Header'
import Form from '@components/Form'
import Posts from '@components/Posts'

const Home: NextPage<{ posts: PostWithUser[] }> = ({ posts }) => {
  return (
    <div className='flex flex-col items-center mt-10'>
      <div className='max-w-95 lg:max-w-60 xl:max-w-30'>
        <SEO />
        <Header />
        <Form />
        <Posts posts={posts} />
      </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await prisma.post.findMany({ include: { user: true } })

  return {
    props: {
      posts,
    },
  }
}

export default Home

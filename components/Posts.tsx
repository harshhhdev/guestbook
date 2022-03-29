import { FC } from 'react'
import { format } from 'timeago.js'
import useSWR from 'swr'
import fetcher from '@lib/fetcher'
import { PostWithUser } from '@typings/index'

const Posts: FC<{ fallback: PostWithUser[] }> = ({ fallback }) => {
  const { data: posts } = useSWR('/api/posts', fetcher, { fallback })

  return (
    <div className='mb-32'>
      {posts?.map((post, index) => (
        <div key={index}>
          <h3>{post.content}</h3>
          <p>
            Written by {post.user.name} · Posted at{' '}
            {format(new Date(post.createdAt), "d MMM yyyy 'at' h:mm bb")}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Posts

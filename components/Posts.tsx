import { FC } from 'react'
import { format } from 'timeago.js'
import { PostWithUser } from '@typings/index'

const Posts: FC<{ posts: PostWithUser[] }> = ({ posts }) => {
  return (
    <div className='mb-32'>
      {posts.map((post, index) => (
        <div key={index}>
          <h3>{post.content}</h3>
          <p>
            Written by {post.user.name} · Posted {format(post.createdAt)}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Posts

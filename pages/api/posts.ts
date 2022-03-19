import { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@lib/prisma'

const fetchPosts = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: 'desc' },
      include: { user: true },
    })

    return res.status(200).json(
      posts.map((post) => ({
        id: post.id,
        created: post.createdAt,
        content: post.content,
        user: post.user,
      }))
    )
  } catch (err) {
    console.error(err)
    return res.status(509).json({ error: err })
  }
}

export default fetchPosts

import { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from 'next-auth/react'
import prisma from '@lib/prisma'

const newPost = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({ req })
  const { content } = req.body

  if (typeof session?.id === 'string') {
    try {
      const post = await prisma.post.create({
        data: {
          content: content,
          user: { connect: { id: session.id } },
        },
      })

      return res.status(200).json({ post })
    } catch (err) {
      console.error(err)
      return res.status(509).json({ error: err })
    }
  }
}

export default newPost

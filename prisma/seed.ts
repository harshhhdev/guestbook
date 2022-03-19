import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const main = async () => {
  const posts = [
    'I am such a dark mode addict',
    'I should really try out Remix sometime soon',
    'I cannot imagine life without Vercel sometimes',
    'Prisma is love, Prisma is life',
    'Once I started using TypeScript, JavaScript just feels weird',
  ].map(
    async (content) =>
      await prisma.post.create({
        data: {
          content: content,
          user: { connect: { id: 'cl0y8e9080010infzowwtttjf' } },
        },
      })
  )

  console.log(`🌱 Created ${posts.length} records `)
}

main()
  .catch((err) => {
    console.error(err)
  })
  .finally(async () => {
    await prisma.$disconnect
  })

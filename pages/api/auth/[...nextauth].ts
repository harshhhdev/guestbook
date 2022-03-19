import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prisma from '@lib/prisma'

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.SECRET,
  session: { strategy: 'jwt' },
  jwt: { secret: process.env.SECRET },
  pages: { signIn: '/' },
  callbacks: {
    async session({ session, token, user }) {
      session.id = token.sub

      return session
    },
  },
  debug: false,
})

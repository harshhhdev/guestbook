# Harsh's Guestbook

📂 Project files for a blog post about [Building a Serverless Application with Next.js and CockroachDB!](https://dev.to/harshhhdev/building-a-serverless-application-with-nextjs-and-cockroachdb-3pm5) 

# 🚀 Quickstart

Run the website locally

```
git clone https://github.com/harshhhdev/guestbook.git
```

## Setting up the project

```bash
cd guestbook

# Install deps
yarn
```

Rename `.env.local.EXAMPLE` to `.env.local`

Now, go to [CockroachDB], and create a new cluster. Create a user, and hit "connect", navigate over to connection string follow the instructions.

Next, run `yarn generate && yarn migrate:dev` to pull your schema from your `prisma/schema.prisma` file into [CockroachDB].

## Starting server

```bash
yarn dev
```

Server should now be running on [localhost](https://localhost:3000)

[cockroachdb]: https://cockroachlabs.com

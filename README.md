# Harsh's Guestbook

📂 Project files for a talk about migrating a live [PostgreSQL](https://www.postgresql.org/) database into [CockroachDB serverless](https://www.cockroachlabs.com/serverless)

Check out the [video](https://dev.to/harshhhdev/building-a-serverless-application-with-nextjs-and-cockroachdb-287m)!

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

For a more in-depth explaination, be sure to checkout the [video](https://dev.to/harshhhdev/building-a-serverless-application-with-nextjs-and-cockroachdb-287m).

## Starting server

```bash
yarn dev
```

Server should now be running on [localhost](https://localhost:3000)

[cockroachdb]: https://cockroachlabs.com

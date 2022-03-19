namespace NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXTAUTH_URL: string
    GITHUB_ID: string
    GITHUB_SECRET: string
    DATABASE_URL: string
    SECRET: string
  }
}

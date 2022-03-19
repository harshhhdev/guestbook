import { PostWithUser } from '@typings/index'

export default async function fetcher(
  input: RequestInfo,
  init?: RequestInit
): Promise<PostWithUser[]> {
  const res = await fetch(input, init)
  return res.json()
}

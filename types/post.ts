import { User } from "./user"

export type Post = {
  id?: string
  userId: number
  content: string
  image?: string
  createdAt?: string
  user?: User
}
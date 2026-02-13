import { User } from "./user"

export type Post = {
  id: string
  userId: string
  content: string
  image?: string
  createdAt: string
  user?: User
}
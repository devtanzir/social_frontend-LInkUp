
export interface User {
  id: string
  name: string
  profileImage: string
  coverImage: string
}

export interface Post {
  id: string
  userId: string
  content: string
  image?: string
  createdAt: string
  user?: User
}







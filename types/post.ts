export interface Post {
  id: number
  content: string
  image?: string
  userId: number
  user?: {
    id: number
    name: string
    profileImage?: string
  }
  createdAt: string
  updatedAt: string
}


export interface CreatePostDto {
  content: string
  image?: string
  userId: number
}

export type UpdatePostDto = Partial<Pick<Post, "content" | "image">>
export interface User {
  id: number
  name: string
  profileImage?: string
  coverImage?: string
  createdAt: string
  updatedAt: string
}

export type CreateUserDto = Pick<User, "name"> & {
  profileImage?: string
  coverImage?: string
}

export type UpdateUserDto = Partial<CreateUserDto>
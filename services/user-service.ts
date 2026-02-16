import { CreateUserDto, UpdateUserDto, User } from "@/types/user";
import { api } from "./api";

export const userService = {
  getAll: async (): Promise<User[]> => {
    const { data } = await api.get("/user");
    return data;
  },

  getById: async (id: number): Promise<User> => {
    const { data } = await api.get(`/user/${id}`);
    return data;
  },

  getPostsByUser: async (userId: number) => {
    const { data } = await api.get(`/user/${userId}/posts`);
    return data;
  },

  create: async (payload: CreateUserDto): Promise<User> => {
    const { data } = await api.post("/user", payload);
    return data;
  },

  update: async (id: number, payload: UpdateUserDto): Promise<User> => {
    const { data } = await api.patch(`/user/${id}`, payload);
    return data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/user/${id}`);
  },
}
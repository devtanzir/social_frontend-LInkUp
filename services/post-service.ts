import { api } from "@/services/api";
import { CreatePostDto, Post, UpdatePostDto } from "@/types/post";

export const postService = {
  getAll: async (): Promise<Post[]> => {
    const { data } = await api.get("/post");
    return data;
  },

  getById: async (id: number): Promise<Post> => {
    const { data } = await api.get(`/post/${id}`);
    return data;
  },

  create: async (payload: CreatePostDto): Promise<Post> => {
    const { data } = await api.post("/post", payload);
    return data;
  },

  update: async (id: number, payload: UpdatePostDto): Promise<Post> => {
    const { data } = await api.patch(`/post/${id}`, payload);
    return data;
  },

  delete: async (id: number): Promise<void> => {
    await api.delete(`/post/${id}`);
  },
};
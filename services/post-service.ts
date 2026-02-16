import { Post } from "@/types/post";
import { api } from "./api";

export const getPosts = async () => {
  const { data } = await api.get("/post");
  return data;
};

export const createPost = async (post: Post) => {
  const { data } = await api.post("/post", post);
  return data;
};
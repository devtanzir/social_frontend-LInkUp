import { api } from "./api";

export const getPosts = async () => {
  const { data } = await api.get("/post");
  return data;
};

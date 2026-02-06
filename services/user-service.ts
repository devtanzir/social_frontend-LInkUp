import { User } from "@/types/user";
import { api } from "./api";

export const getUsers = async () => {
  const { data } = await api.get("/user");
  return data;
};

export const getUser = async (id: number) => {
  const { data } = await api.get(`/user/${id}`);
  return data;
};

export const getPostByUser = async (userId: number) => {
  const { data } = await api.get(`/user/${userId}/posts`);
  return data;
}

export const createUser = async (user: User) => {
  const { data } = await api.post("/user", user);
  return data;
};

export const updateUser = async (id: number, user: Partial<User>) => {
  const { data } = await api.patch(`/user/${id}`, user);
  return data;
}

export const deleteUser = async (id: number) => {
  const { data } = await api.delete(`/user/${id}`);
  return data;
}
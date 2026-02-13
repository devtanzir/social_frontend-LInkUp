// hooks/posts/useGetPosts.ts
import { getPosts } from "@/services/post-service";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn:  getPosts,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

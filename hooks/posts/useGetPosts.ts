// hooks/posts/useGetPosts.ts
import { postService } from "@/services/post-service";
import { useQuery } from "@tanstack/react-query";

export const useGetPosts = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn:  postService.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};

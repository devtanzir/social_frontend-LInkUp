import { useQuery } from "@tanstack/react-query";
import { postService } from "@/services/post-service";

export const useGetPost = (id: number) => {
  return useQuery({
    queryKey: ["posts", id],
    queryFn: () => postService.getById(id),
    enabled: !!id,
  });
};
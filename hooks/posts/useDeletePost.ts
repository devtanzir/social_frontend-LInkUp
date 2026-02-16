import { postService } from "@/services/post-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeletePost = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => postService.delete(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
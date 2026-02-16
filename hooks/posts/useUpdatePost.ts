import { postService } from "@/services/post-service";
import { UpdatePostDto } from "@/types/post";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdatePost = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: UpdatePostDto }) =>
      postService.update(id, payload),
    onSuccess: (_, { id }) => {
      qc.invalidateQueries({ queryKey: ["posts"] });
      qc.invalidateQueries({ queryKey: ["posts", id] });
    },
  });
};
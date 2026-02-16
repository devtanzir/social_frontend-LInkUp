import { createPost } from "@/services/post-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";


export const useCreatePost = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: createPost,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};

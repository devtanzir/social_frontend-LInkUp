import { userService } from "@/services/user-service";
import { User } from "@/types/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateUser = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: User }) =>
      userService.update(id, payload),
    onSuccess: (_, { id }) => {
      qc.invalidateQueries({ queryKey: ["users"] });
      qc.invalidateQueries({ queryKey: ["user", id] });
    },
  });
};
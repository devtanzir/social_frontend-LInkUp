import { userService } from "@/services/user-service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteUser = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => userService.delete(id),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["users"] });
      qc.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
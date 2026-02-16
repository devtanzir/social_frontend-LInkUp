// hooks/users/useSingleUser.ts
import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user-service";

export const useSingleUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => userService.getById(id),
    enabled: !!id, // if id is not provided, the query will not run
  });
};

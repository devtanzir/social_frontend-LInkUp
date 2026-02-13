// hooks/users/useSingleUser.ts
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/user-service";

export const useSingleUser = (id: number) => {
  return useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id),
    enabled: !!id, // if id is not provided, the query will not run
  });
};

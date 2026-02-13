// hooks/users/useSingleUser.ts
import { useQuery } from "@tanstack/react-query";
import { getPostByUser, } from "@/services/user-service";

export const useGetPostByUserId = (id: number) => {
  return useQuery({
    queryKey: ["posts", "user",, id],
    queryFn: () => getPostByUser(id),
    enabled: !!id, // if id is not provided, the query will not run
  });
};

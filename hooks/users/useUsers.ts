import { useQuery } from "@tanstack/react-query";
import { userService } from "@/services/user-service";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: userService.getAll,
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 2,
  });
};
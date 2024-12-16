import { useQuery } from "@tanstack/react-query";
import { CACHE_USERS } from "../data/queryKeys";
import { userRepository } from "../firebase/api/user";
import { UsersTableRowsType } from "../interfaces/users";

export const useUsers = () =>
  useQuery<UsersTableRowsType[] | null>({
    queryKey: [CACHE_USERS],
    queryFn: () => userRepository.getAll(),
  });

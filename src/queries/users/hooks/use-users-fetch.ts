"use client";

import { useQuery } from "@tanstack/react-query";
import UsersGet from "../users-get";
import { User } from "../users-type";

export function useUsersFetch() {
  return useQuery<User[], Error>({
    queryKey: ["users"],
    queryFn: UsersGet,
  });
}

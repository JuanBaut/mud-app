"use client";

import { useUsersFetch } from "@/queries/users/hooks/use-users-fetch";
import { Loader2 } from "lucide-react";
import UsersCard from "./users-card";

export default function AdminUsers() {
  const { data: users, isLoading, isError, error } = useUsersFetch();

  if (isLoading) {
    return (
      <div className="flex size-full flex-col items-center justify-center">
        <Loader2 className="size-10 animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex size-full flex-col items-center justify-center">
        <span>Error: {error.message}</span>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-scroll">
      <div className="flex h-fit w-full flex-wrap justify-center p-2">
        {users && users.length > 0 ? (
          users.map((user) => <UsersCard key={user._id} user={user} />)
        ) : (
          <p>No hay usuarios creados.</p>
        )}
      </div>
    </div>
  );
}

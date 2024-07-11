import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { User } from "@/queries/users/users-type";
import {
  changeRole,
  changeStatus,
  deleteUser,
} from "@/queries/users/users-utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Power, Repeat, TrashIcon } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  user: User;
}

export default function UsersCard({ user }: Props) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error deleting user:", error);
    },
  });

  const changeRoleMutation = useMutation({
    mutationFn: (id: string) => changeRole(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error changing user role:", error);
    },
  });

  const changeStatusMutation = useMutation({
    mutationFn: (id: string) => changeStatus(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error changing user status:", error);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(user._id);
  };

  const handleChangeRole = () => {
    changeRoleMutation.mutate(user._id);
  };

  const handleChangeStatus = () => {
    changeStatusMutation.mutate(user._id);
  };

  return (
    <div className="size-full p-2 lg:w-[50%]">
      <Card className="size-full">
        <CardContent className="grid flex-1 gap-3 p-4">
          <div className="flex justify-between">
            <div className="flex flex-col text-lg">
              <h1 className="font-medium text-foreground">
                {user.name} {user.lastname}
              </h1>
              <span>DNI: {user.dni}</span>
            </div>

            <div className="flex items-center gap-2 self-start">
              <Button
                variant="ghost"
                size="icon"
                className="text-destructive"
                onClick={handleDelete}
              >
                <TrashIcon className="size-5" />
                <span className="sr-only">Delete</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={handleChangeRole}>
                <Repeat className="size-5" />
                <span className="sr-only">Rol</span>
              </Button>
              <Button variant="ghost" size="icon" onClick={handleChangeStatus}>
                <Power className="size-5" />
                <span className="sr-only">Power</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 xs:justify-center">
            {user.signup_date && (
              <Cell title="Registro">
                {new Date(user.signup_date).toLocaleDateString()}
              </Cell>
            )}
            <Cell title="Rol">{user.role}</Cell>
            <Cell title="Estado">{user.status}</Cell>
            {user.path && <span>-</span>}
            <Cell title="Email">{user.email}</Cell>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

type CellProps = {
  children: ReactNode;
  title: string;
};

function Cell({ children, title }: CellProps) {
  return (
    <Badge className="flex gap-2 text-sm" variant={"outline"}>
      <p>{title}:</p>
      <p className="font-normal">{children}</p>
    </Badge>
  );
}

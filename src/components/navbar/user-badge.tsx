import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ProfileRequest from "@/queries/profile/profile-request";
import userAtom from "@/state/login-state";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { Loader2, User } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "../ui/badge";

export default function UserBadge() {
  const [userToken, setUserToken] = useAtom(userAtom);
  const [isLogged, setIsLogged] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    setUserToken(Cookies.get("userToken"));
    if (userToken) {
      setIsLogged(true);
    }
  }, [setUserToken, userToken]);

  const {
    data: userData,
    isLoading,
    isStale,
  } = useQuery({
    queryFn: () =>
      userToken ? ProfileRequest(userToken) : Promise.resolve(null),
    queryKey: ["profile"],
    enabled: isLogged,
  });

  if (isLoading) {
    return (
      <>
        <Badge>
          <Loader2 className="size-3 animate-spin" />
        </Badge>
      </>
    );
  }

  if (!isStale) {
    return <></>;
  }

  const handleLogout = () => {
    setUserToken(undefined);
    setIsLogged(false);
    Cookies.remove("userToken");
    queryClient.invalidateQueries({ queryKey: ["profile"] });
  };

  return (
    <>
      {userData ? (
        <>
          <div className="hidden space-x-2 sm:block">
            <Badge>{userData.name}</Badge>
            <Badge variant={"secondary"}>{userData.email}</Badge>
            <Badge variant={"outline"} onClick={handleLogout}>
              Cerrar sesion
            </Badge>
          </div>
          <div className="block sm:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  className="size-8 rounded-full"
                >
                  <User className="size-5" />
                  <span className="sr-only">Usuario</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <div className="flex gap-1 pb-1">
                  <Badge className="h-fit rounded-sm text-sm font-normal">
                    {userData.name}
                  </Badge>
                  <Badge
                    className="h-fit rounded-sm text-sm font-normal"
                    variant={"secondary"}
                  >
                    {userData.email}
                  </Badge>
                </div>
                <DropdownMenuItem onClick={handleLogout}>
                  Cerrar sesion
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </>
      ) : null}
    </>
  );
}

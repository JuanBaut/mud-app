import userAtom from "@/state/login-state";
import { useAtom } from "jotai";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

export default function MobileNavbar() {
  const [userToken] = useAtom(userAtom);

  return (
    <Sheet>
      <SheetTrigger className="block sm:hidden">
        <Menu className="size-7" />
      </SheetTrigger>
      <SheetContent className="flex flex-col gap-4 pt-36">
        <Link
          className="text-2xl font-medium underline-offset-4 hover:underline"
          href="/home"
        >
          <SheetTrigger>Inicio</SheetTrigger>
        </Link>
        {userToken ? (
          <Link
            className="text-2xl font-medium underline-offset-4 hover:underline"
            href="/account/admin/map"
          >
            <SheetTrigger>Admin</SheetTrigger>
          </Link>
        ) : null}
        {!userToken ? (
          <>
            <Link
              className="text-2xl font-medium underline-offset-4 hover:underline"
              href="/home/signup"
            >
              <SheetTrigger>Registrarse</SheetTrigger>
            </Link>
            <Link
              className="text-2xl font-medium underline-offset-4 hover:underline"
              href="/home/login"
            >
              <SheetTrigger>Iniciar Sesión</SheetTrigger>
            </Link>
          </>
        ) : null}
      </SheetContent>
    </Sheet>
  );
}

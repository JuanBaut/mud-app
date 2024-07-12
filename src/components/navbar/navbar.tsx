import userAtom from "@/state/login-state";
import { useAtom } from "jotai";
import Link from "next/link";
import ThemeSwitch from "../theme-switch";
import MobileNavbar from "./mobile-navbar";
import UserBadge from "./user-badge";

export default function Navbar() {
  const [userToken] = useAtom(userAtom);

  return (
    <header className="fixed z-50 flex h-14 w-full items-center border-b border-primary bg-background/70 px-4 backdrop-blur-sm lg:px-6">
      <div className="flex gap-4 items-center">
      <Link className="flex items-center justify-center" href="/">
        <span className="text-lg">MudApp</span>
      </Link>
      <ThemeSwitch />
      <UserBadge />
      </div>
      <nav className="invisible ml-auto flex w-1 gap-4 sm:visible sm:w-fit sm:gap-6">
        <Link
          className="text-sm font-medium underline-offset-4 hover:underline"
          href="/home"
        >
          Inicio
        </Link>

        {userToken ? (
          <Link
            className="text-sm font-medium underline-offset-4 hover:underline"
            href="/account/admin/map"
          >
            Admin
          </Link>
        ) : null}

        {!userToken ? (
          <>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/home/signup"
            >
              Registrarse
            </Link>
            <Link
              className="text-sm font-medium underline-offset-4 hover:underline"
              href="/home/login"
            >
              Iniciar Sesión
            </Link>
          </>
        ) : null}
      </nav>

      <MobileNavbar />
    </header>
  );
}

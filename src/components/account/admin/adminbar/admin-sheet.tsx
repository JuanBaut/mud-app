import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Map, TruckIcon, UserIcon, Wrench } from "lucide-react";
import Link from "next/link";
import { ReactElement, ReactNode, cloneElement } from "react";

const map = "/account/admin/map";
const users = "/account/admin/users";
const fleet = "/account/admin/fleet";

export default function AdminSheet() {
  return (
    <Sheet>
      <SheetTrigger className="z-50 block md:hidden">
        <div className="fixed bottom-0 m-8 flex size-14 items-center justify-center rounded-full border bg-primary/95">
          <Wrench className="size-6 text-primary-foreground" />
        </div>
      </SheetTrigger>
      <SheetContent side={"left"} className="flex flex-col gap-4 pt-36">
        <SheetButton icon={<Map />} href={map}>
          Map
        </SheetButton>

        <SheetButton icon={<UserIcon />} href={users}>
          Usuarios
        </SheetButton>

        <SheetButton icon={<TruckIcon />} href={fleet}>
          Flota
        </SheetButton>
      </SheetContent>
    </Sheet>
  );
}

type Props = {
  children: ReactNode;
  icon: ReactElement;
  href: string;
};

function SheetButton({ children, href, icon }: Props) {
  return (
    <>
      <Link href={href}>
        <SheetTrigger className="flex items-center justify-center">
          {cloneElement(icon, { className: "mr-3 size-7" })}
          <span className="text-2xl font-medium">{children}</span>
        </SheetTrigger>
      </Link>
    </>
  );
}

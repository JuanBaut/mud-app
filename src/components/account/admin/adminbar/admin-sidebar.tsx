import LinkButton from "@/components/ui/link-button";
import { Map, TruckIcon, UserIcon } from "lucide-react";

const map = "/account/admin/map";
const users = "/account/admin/users";
const fleet = "/account/admin/fleet";

export default function AdminSidebar() {
  return (
    <>
      <div className="hidden h-full md:inline">
        <div className="flex h-full w-64 flex-col gap-4 border-r px-2 py-6">
          <LinkButton
            btnCN="justify-start text-md"
            href={map}
            variant={"ghost"}
          >
            <Map className="mr-4 size-6" />
            Mapa Interactivo
          </LinkButton>

          <LinkButton
            btnCN="justify-start text-md"
            href={users}
            variant={"ghost"}
          >
            <UserIcon className="mr-4 size-6" />
            Gestión de Usuarios
          </LinkButton>

          <LinkButton
            btnCN="justify-start text-md"
            href={fleet}
            variant={"ghost"}
          >
            <TruckIcon className="mr-4 size-6" />
            Gestión de Flota
          </LinkButton>
        </div>
      </div>
    </>
  );
}

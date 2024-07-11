import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search } from "lucide-react";
import RouteSelect from "./route-select";

export default function RouteDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="fixed bottom-16 right-0 z-50 m-8 flex size-14 items-center justify-center rounded-full border bg-primary">
          <Search className="size-6 text-primary-foreground" />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Escoge una ruta</DialogTitle>
          </DialogHeader>
          <RouteSelect />
        </DialogContent>
      </Dialog>
    </>
  );
}

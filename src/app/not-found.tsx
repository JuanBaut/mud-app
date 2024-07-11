import { Button } from "@/components/ui/button";
import { Undo2 } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-svh flex-col justify-center">
      <h1 className="self-center text-center text-3xl font-bold">EasyTrack</h1>
      <span className="self-center text-center text-2xl">
        Esta lugar no existe | 404
      </span>
      <div className="flex w-full justify-center pt-8">
        <Link href={"/home"} className="w-fit">
          <Button>
            Volver
            <Undo2 className="ml-2 size-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

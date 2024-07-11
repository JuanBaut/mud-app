"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Status = {
  value: string;
  label: string;
};

const statuses: Status[] = [
  {
    value:
      "Avenida Libertador 3456, Palermo, C1425AAN, Ciudad Autónoma de Buenos Aires",
    label: "Avenida Libertador 3456, Palermo, Ciudad Autónoma de Buenos Aires",
  },
  {
    value: "Calle Gorriti 1234, San Miguel de Tucumán, T4000, Tucumán",
    label: "Calle Gorriti 1234, San Miguel de Tucumán, Tucumán",
  },
  {
    value: "Pasaje San Lorenzo 789, Barrio Nueva Córdoba, X5000, Córdoba",
    label: "Pasaje San Lorenzo 789, Barrio Nueva Córdoba, Córdoba",
  },
  {
    value: "Calle Belgrano 567, Rosario, S2000, Santa Fe",
    label: "Calle Belgrano 567, Rosario, Santa Fe",
  },
  {
    value: "Calle 25 de Mayo 6789, Salta, A4400, Salta",
    label: "Calle 25 de Mayo 6789, Salta, Salta",
  },
];

export function ComboboxDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null,
  );

  return (
    <div>
      <p className="mb-2 text-sm font-medium">Ruta</p>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            size="sm"
            className="w-full justify-start text-muted-foreground"
          >
            {selectedStatus ? (
              <>{selectedStatus.label}</>
            ) : (
              <>Ingresa la dirección</>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[100%] p-0" side="bottom" align="start">
          <Command>
            <CommandInput placeholder="..." />
            <CommandList>
              <CommandEmpty>No hay coincidencias.</CommandEmpty>
              <CommandGroup>
                {statuses.map((status) => (
                  <CommandItem
                    key={status.value}
                    value={status.value}
                    onSelect={(value) => {
                      setSelectedStatus(
                        statuses.find((priority) => priority.value === value) ||
                          null,
                      );
                      setOpen(false);
                    }}
                  >
                    <span>{status.label}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}

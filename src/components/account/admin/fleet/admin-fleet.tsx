"use client";

import { useFleetFetch } from "@/queries/fleet/hooks/use-fleet-fetch";
import FleetCard from "./fleet-card";
import { Loader2 } from "lucide-react";

export default function AdminFleet() {
  const { data: vehicles, isLoading, isError, error } = useFleetFetch();

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
      <div className="flex size-fit flex-wrap justify-center p-2">
        {vehicles && vehicles.length > 0 ? (
          vehicles.map((vehicle) => (
            <FleetCard key={vehicle.plate} vehicle={vehicle} />
          ))
        ) : (
          <p>No hay vehículos disponibles</p>
        )}
      </div>
    </div>
  );
}

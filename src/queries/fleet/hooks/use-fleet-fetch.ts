"use client";

import FleetGet from "@/queries/fleet/vehicle-get";
import { useQuery } from "@tanstack/react-query";
import { Vehicle } from "../vehicle-type";

export function useFleetFetch() {
  return useQuery<Vehicle[], Error>({
    queryKey: ["fleet"],
    queryFn: FleetGet,
  });
}

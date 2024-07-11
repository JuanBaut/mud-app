import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import GeoRequest from "../geo-request";
import { Address, Coordinates } from "../geo-type";

export function useGeoFetch() {
  const [addressData, setAddressData] = useState<Address | null>(null);

  const { data, error, isLoading } = useQuery<Coordinates, Error>({
    queryKey: ["coordinates", addressData],
    queryFn: () =>
      addressData ? GeoRequest(addressData) : Promise.reject("No data"),
    enabled: !!addressData,
  });

  return { data, error, isLoading, setAddressData };
}

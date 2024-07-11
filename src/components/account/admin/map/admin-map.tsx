"use client";

import stringToLatLng from "@/lib/string-to-coordinates";
import routeAtom from "@/state/route-state";
import { useAtom } from "jotai";
import * as L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet/dist/leaflet.css";
import { Route } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import RouteDialog from "../route/route-dialog";

type Props = {
  departure?: L.LatLngTuple;
  destination?: L.LatLngTuple;
};

function UpdateMap({ departure, destination }: Props) {
  const map = useMap();

  useEffect(() => {
    if (departure && destination) {
      map.setView(departure, 20);

      const waypoints = L.Routing.control({
        waypoints: [L.latLng(departure), L.latLng(destination)],
      }).addTo(map);

      return () => {
        waypoints.remove();
      };
    }
  }, [departure, destination, map]);
  return null;
}

export default function AdminMap() {
  const [departure, setDeparture] = useState<L.LatLngTuple>();
  const [destination, setDestination] = useState<L.LatLngTuple>();
  const [route] = useAtom(routeAtom);

  useEffect(() => {
    const newDeparture = stringToLatLng(route?.departure);
    if (newDeparture) {
      setDeparture(newDeparture);
    }

    const newDestination = stringToLatLng(route?.destination);
    if (newDestination) {
      setDestination(newDestination);
    }
  }, [route]);

  return (
    <div className="size-full">
      <MapContainer
        center={[48.859111, 2.293269]}
        zoom={15}
        className="z-0 h-full border"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <UpdateMap destination={destination} departure={departure} />
      </MapContainer>

      <RouteDialog />
      <Link
        href="/account/admin/route"
        className="fixed bottom-0 right-0 z-50 m-8 flex size-14 items-center justify-center rounded-full border bg-primary"
      >
        <Route className="size-6 text-primary-foreground" />
      </Link>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import RouteRequest, { RequestData } from "@/queries/routes/route-request";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function RouteMenu() {
  const [departure, setDeparture] = useState("");
  const [stops, setStops] = useState([""]);
  const [carrierDni, setCarrierDni] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState("pending");

  function success(pos: GeolocationPosition) {
    const crd = pos.coords;
    setDeparture(`${crd.latitude}, ${crd.longitude}`);
  }

  function error(err: GeolocationPositionError) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    setDeparture("No se pudo obtener la ubicacion...");
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }, []);

  const handleAddAddress = () => {
    setStops([...stops, ""]);
  };

  const handleRemoveAddress = (index: number) => {
    const newAddresses = [...stops];
    newAddresses.splice(index, 1);
    setStops(newAddresses);
  };

  const handleAddressChange = (index: number, value: string) => {
    const newAddresses = [...stops];
    newAddresses[index] = value;
    setStops(newAddresses);
  };

  const RouteQuery = useMutation({
    mutationFn: (data: RequestData) => RouteRequest(data),
    onSuccess: (route) => {
      console.log(route);
    },
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = { departure, stops, carrierDni, notes, status };
    try {
      await RouteQuery.mutateAsync(data);
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return (
    <div className="relative size-full overflow-scroll">
      <div className="container mx-auto px-4 py-8 md:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold">Ruta Delivery</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="current-location"
              className="mb-2 block font-medium"
            >
              Ubicación actual
            </label>
            {departure ? (
              <div className="rounded-md bg-gray-100 p-4 dark:bg-gray-800">
                <p>{departure}</p>
              </div>
            ) : (
              <p>Cargando...</p>
            )}
          </div>
          <div>
            <label htmlFor="addresses" className="mb-2 block font-medium">
              Direcciones
            </label>
            <div className="space-y-4">
              {stops.map((address, index) => (
                <div key={index} className="flex items-center">
                  <Input
                    id={`address-${index}`}
                    value={address}
                    onChange={(e) => handleAddressChange(index, e.target.value)}
                    className="mr-4 flex-1"
                    placeholder="Número, Calle, Ciudad, Estado, Código Postal"
                  />
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRemoveAddress(index)}
                  >
                    Eliminar
                  </Button>
                </div>
              ))}
              <Button variant="outline" onClick={handleAddAddress}>
                Añadir dirección
              </Button>
            </div>
          </div>
          <div>
            <label htmlFor="user-id" className="mb-2 block font-medium">
              DNI del Usuario
            </label>
            <Input
              id="user-id"
              value={carrierDni}
              onChange={(e) => setCarrierDni(e.target.value)}
              placeholder="Usuario encargado del delivery"
            />
          </div>
          <div>
            <label htmlFor="notes" className="mb-2 block font-medium">
              Notas del delivery
            </label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              placeholder="Notas importantes acerca del delivery."
            />
          </div>
          <div>
            <label htmlFor="status" className="mb-2 block font-medium">
              Estado
            </label>
            <Select value={status} onValueChange={(e) => setStatus(e)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seleccionar estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pending">Pendiente</SelectItem>
                <SelectItem value="in-progress">En Progreso</SelectItem>
                <SelectItem value="completed">Completado</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full">
            Save Route
          </Button>
        </form>
      </div>
    </div>
  );
}

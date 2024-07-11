"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import GeoRequest from "@/queries/map/geo-request";
import { Address } from "@/queries/map/geo-type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import RouteAddress from "./fields/address-field";
import RouteCity from "./fields/city-field";
import RoutePostal from "./fields/postal-field";
import RouteState from "./fields/state-field";
import RouteStreet from "./fields/street-field";

const formSchema = z.object({
  address: z.string().min(1, { message: "Capo obligatorio" }),
  street: z.string().min(1, { message: "Capo obligatorio" }),
  city: z.string().min(1, { message: "Capo obligatorio" }),
  state: z.string({ message: "Capo obligatorio" }),
  postal: z.string({ message: "Capo obligatorio" }),
});

export default function RouteForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
      street: "",
      city: "",
      state: "",
      postal: "",
    },
  });

  const RouteQuery = useMutation({
    mutationFn: (data: Address) => GeoRequest(data),
    onError: (error) => {
      console.error("Error fetching coordinates:", error);
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    data,
  ) => {
    console.log(data);
    try {
      await RouteQuery.mutateAsync(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <div className="space-y-4">
          <RouteAddress control={form.control} />
          <RouteStreet control={form.control} />
          <RouteCity control={form.control} />
          <RouteState control={form.control} />
          <RoutePostal control={form.control} />
        </div>
        <div className="pt-4">
          <Button className="w-full" type="submit">
            Crear
          </Button>
        </div>
      </form>
    </Form>
  );
}

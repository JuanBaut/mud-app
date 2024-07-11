import { Control } from "react-hook-form";

export type RouteControlProps = {
  control: Control<
    {
      address: string;
      street: string;
      postal: string;
      state: string;
      city: string;
    },
    any
  >;
};

import { Control } from "react-hook-form";

export type LoginControlProps = {
  control: Control<
    {
      email: string;
      password: string;
    },
    any
  >;
};

import { Control } from "react-hook-form";

export type SignupControlProps = {
  control: Control<
    {
      name: string;
      lastname: string;
      dni: string;
      email: string;
      phone: string;
      pswd_fields: {
        password: string;
        confirm: string;
      };
    },
    any
  >;
};

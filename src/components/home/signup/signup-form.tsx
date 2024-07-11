"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import SignupRequest, { SignupData } from "@/queries/signup/signup-request";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import validator from "validator";
import { z } from "zod";
import SignupConfirm from "./fields/signup-confirm";
import SignupDni from "./fields/signup-dni";
import SignupEmail from "./fields/signup-email";
import SignupLastname from "./fields/signup-lastname";
import SignupName from "./fields/signup-name";
import SignupPassword from "./fields/signup-password";
import SignupPhone from "./fields/signup-phone";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Este campo es obligatorio",
  }),
  lastname: z.string().min(1, {
    message: "Este campo es obligatorio",
  }),
  dni: z.string().length(8, {
    message: "Deben ser 8 números",
  }),
  phone: z.string().trim().refine(validator.isMobilePhone, {
    message: "Número de teléfono inválido",
  }),
  email: z.string().email({
    message: "Correo invalido",
  }),
  pswd_fields: z
    .object({
      password: z.string().min(5, {
        message: "Debe tener más de 5 caracteres",
      }),
      confirm: z.string(),
    })
    .refine((data) => data.password === data.confirm, {
      message: "Las contraseñas no coinciden",
      path: ["confirm"],
    }),
});

export default function SignupForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      lastname: "",
      dni: "",
      email: "",
      phone: "",
      pswd_fields: { password: "", confirm: "" },
    },
  });

  const SignupQuery = useMutation({
    mutationFn: (data: SignupData) => SignupRequest(data),
    onSuccess: () => {
      router.push("/home/login");
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    data,
  ) => {
    const formData = {
      name: data.name,
      lastname: data.lastname,
      email: data.email,
      password: data.pswd_fields.confirm,
      phone: data.phone,
      dni: data.dni,
    };

    try {
      await SignupQuery.mutateAsync(formData);
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <CardContent className="space-y-4">
          <SignupName control={form.control} />
          <SignupLastname control={form.control} />
          <SignupDni control={form.control} />
          <SignupEmail control={form.control} />
          <SignupPhone control={form.control} />
          <SignupPassword control={form.control} />
          <SignupConfirm control={form.control} />
        </CardContent>

        <CardFooter>
          {SignupQuery.isIdle ? (
            <Button className="w-full" type="submit">
              Crear Cuenta
            </Button>
          ) : null}

          {SignupQuery.isPending ? (
            <Button disabled className="h-fit w-full">
              <Loader2 className="animate-spin" />
            </Button>
          ) : null}

          {SignupQuery.isError ? (
            <Button className="h-fit w-full" type="submit">
              {SignupQuery.error.message} Intentar de nuevo?
            </Button>
          ) : null}
        </CardFooter>
      </form>
    </Form>
  );
}

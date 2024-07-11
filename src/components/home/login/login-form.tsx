"use client";

import { Button } from "@/components/ui/button";
import { CardContent, CardFooter } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import LinkButton from "@/components/ui/link-button";
import LoginRequest, { LoginData } from "@/queries/login/login-request";
import userAtom from "@/state/login-state";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useAtom } from "jotai";
import Cookies from "js-cookie";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import LoginEmail from "./fields/login-email";
import LoginPassword from "./fields/login-password";

const formSchema = z.object({
  email: z.string().email({ message: "Correo inválido" }),
  password: z.string().min(1, { message: "Este campo es obligatorio" }),
});

export default function LoginForm() {
  const router = useRouter();
  const [userCookie, setUserCookie] = useAtom(userAtom);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const LoginQuery = useMutation({
    mutationFn: (data: LoginData) => LoginRequest(data),
    onSuccess: (token) => {
      router.push("/home");
      Cookies.set("userToken", token, { sameSite: "strict", secure: true });
      setUserCookie(token);
    },
  });

  const handleSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (
    data,
  ) => {
    try {
      await LoginQuery.mutateAsync(data);
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)}>
        <CardContent className="space-y-4">
          <LoginEmail control={form.control} />
          <LoginPassword control={form.control} />
        </CardContent>
        <CardFooter className="flex flex-col gap-2">
          {LoginQuery.isIdle ? (
            <Button className="w-full" type="submit">
              Iniciar sesión
            </Button>
          ) : null}

          {LoginQuery.isPending ? (
            <Button disabled className="h-fit w-full">
              <Loader2 className="animate-spin" />
            </Button>
          ) : null}

          {LoginQuery.isError ? (
            <Button className="h-fit w-full" type="submit">
              {LoginQuery.error.message} Intentar de nuevo?
            </Button>
          ) : null}

          <LinkButton
            variant="ghost"
            href="/home/signup"
            className="h-fit w-full"
          >
            ¿No tienes cuenta? Regístrate
          </LinkButton>
        </CardFooter>
      </form>
    </Form>
  );
}

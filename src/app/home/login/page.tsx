"use client";

import LoginForm from "@/components/home/login/login-form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useCheckUser from "@/hooks/use-check-user";
import { Loader2 } from "lucide-react";

export default function Login() {
  const user = useCheckUser();

  if (user) {
    return (
      <div className="flex h-svh items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex size-full items-center justify-center bg-card px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">
            ¡Bienvenido de vuelta!
          </CardTitle>
          <CardDescription>
            Introduce tu correo y contraseña para iniciar sesión.
          </CardDescription>
        </CardHeader>

        <LoginForm />
      </Card>
    </div>
  );
}

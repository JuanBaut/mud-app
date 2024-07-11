"use client";

import SignupForm from "@/components/home/signup/signup-form";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import useCheckUser from "@/hooks/use-check-user";
import { Loader2 } from "lucide-react";

export default function Signup() {
  const user = useCheckUser();

  if (user) {
    return (
      <div className="flex h-svh items-center justify-center">
        <Loader2 className="animate-spin" />
      </div>
    );
  }

  return (
    <>
      <div className="flex size-full items-center justify-center bg-card px-4">
        <Card className="mb-2 mt-16 w-full max-w-md">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Crea tu cuenta</CardTitle>
            <CardDescription>
              Completa los campos para continuar.
            </CardDescription>
          </CardHeader>
          <SignupForm />
        </Card>
      </div>
    </>
  );
}

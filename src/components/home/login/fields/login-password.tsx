import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginControlProps } from "./login-control-props";
import Link from "next/link";

export default function LoginPassword({ control }: LoginControlProps) {
  return (
    <>
      <FormField
        control={control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-wrap justify-between gap-2">
              <FormLabel>Contraseña</FormLabel>
              <FormMessage />
            </div>
            <FormControl>
              <Input type="password" placeholder="" {...field} />
            </FormControl>
            <Link
              className="text-sm font-light text-muted hover:underline"
              href="/reset-password"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </FormItem>
        )}
      />
    </>
  );
}

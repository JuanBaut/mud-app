import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginControlProps } from "./login-control-props";

export default function LoginEmail({ control }: LoginControlProps) {
  return (
    <>
      <FormField
        control={control}
        name="email"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between">
              <FormLabel>Correo electronico</FormLabel>
              <FormMessage />
            </div>
            <FormControl>
              <Input placeholder="a@ejemplo.com" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}

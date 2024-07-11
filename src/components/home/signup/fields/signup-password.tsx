import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupControlProps } from "./signup-control-props";

export default function SignupPassword({ control }: SignupControlProps) {
  return (
    <>
      <FormField
        control={control}
        name="pswd_fields.password"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-wrap justify-between gap-2">
              <FormLabel>Contraseña</FormLabel>
              <FormMessage />
            </div>
            <FormControl>
              <Input type="password" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}

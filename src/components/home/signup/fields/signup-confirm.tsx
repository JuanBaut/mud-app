import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupControlProps } from "./signup-control-props";

export default function SignupConfirm({ control }: SignupControlProps) {
  return (
    <>
      <FormField
        control={control}
        name="pswd_fields.confirm"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-wrap justify-between gap-2">
              <FormLabel>Confirmar Contraseña</FormLabel>
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

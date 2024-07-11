import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupControlProps } from "./signup-control-props";

export default function SignupEmail({ control }: SignupControlProps) {
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

import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupControlProps } from "./signup-control-props";

export default function SignupPhone({ control }: SignupControlProps) {
  return (
    <>
      <FormField
        control={control}
        name="phone"
        render={({ field }) => (
          <FormItem>
            <div className="flex flex-wrap justify-between gap-2">
              <FormLabel>Número de teléfono</FormLabel>
              <FormMessage />
            </div>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}

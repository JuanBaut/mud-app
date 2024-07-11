import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupControlProps } from "./signup-control-props";

export default function SignupDni({ control }: SignupControlProps) {
  return (
    <>
      <FormField
        control={control}
        name="dni"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between">
              <FormLabel>DNI</FormLabel>
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

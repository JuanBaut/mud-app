import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SignupControlProps } from "./signup-control-props";

export default function SignupLastname({ control }: SignupControlProps) {
  return (
    <>
      <FormField
        control={control}
        name="lastname"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between">
              <FormLabel>Apellido</FormLabel>
              <FormMessage />
            </div>
            <FormControl>
              <Input {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
}

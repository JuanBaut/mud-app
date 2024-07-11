import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RouteControlProps } from "./route-control-props";

export default function RoutePostal({ control }: RouteControlProps) {
  return (
    <>
      <FormField
        control={control}
        name="postal"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between">
              <FormLabel>Código Postal</FormLabel>
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

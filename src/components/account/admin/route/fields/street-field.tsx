import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RouteControlProps } from "./route-control-props";

export default function RouteStreet({ control }: RouteControlProps) {
  return (
    <>
      <FormField
        control={control}
        name="street"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between">
              <FormLabel>Calle</FormLabel>
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

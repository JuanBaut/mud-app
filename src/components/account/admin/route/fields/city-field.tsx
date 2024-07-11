import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RouteControlProps } from "./route-control-props";

export default function RouteCity({ control }: RouteControlProps) {
  return (
    <>
      <FormField
        control={control}
        name="city"
        render={({ field }) => (
          <FormItem>
            <div className="flex justify-between">
              <FormLabel>Ciudad</FormLabel>
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

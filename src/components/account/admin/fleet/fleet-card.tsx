import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Vehicle } from "@/queries/fleet/vehicle-type";
import { deleteVehicle, updateVehicle } from "@/queries/fleet/vehicle-utils";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { TrashIcon } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  vehicle: Vehicle;
}

export default function FleetCard({ vehicle }: Props) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: (id: string) => deleteVehicle(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fleet"] });
    },
    onError: (error) => {
      console.error("Error deleting vehicle:", error);
    },
  });

  const updateMutation = useMutation({
    mutationFn: (updatedVehiculo: Vehicle) =>
      updateVehicle(updatedVehiculo._id, updatedVehiculo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["fleet"] });
    },
    onError: (error) => {
      console.error("Error updating vehicle:", error);
    },
  });

  const handleDelete = () => {
    deleteMutation.mutate(vehicle._id);
  };

  const handleUpdate = () => {
    const updatedVehiculo = { ...vehicle, capacidad: 15 };
    updateMutation.mutate(updatedVehiculo);
  };

  return (
    <div className="p-2 lg:w-[50%]">
      <Card className="h-fit w-full ">
        <CardContent className="grid flex-1 gap-3 p-4">
          <div className="flex justify-between">
            <div className="flex flex-col text-lg">
              <h1 className="font-medium text-foreground">
                {vehicle.make} {vehicle.model}
              </h1>
              <span>{vehicle.plate}</span>
            </div>

            <div className="flex items-center gap-2 self-start">
              <Button
                variant="ghost"
                size="icon"
                className="text-destructive"
                onClick={handleDelete}
              >
                <TrashIcon className="size-5" />
                <span className="sr-only">Delete</span>
              </Button>
              {/*<Button variant="ghost" size="icon" onClick={handleUpdate}>*/}
              {/*  <EditIcon className="size-5" />*/}
              {/*  <span className="sr-only">Update</span>*/}
              {/*</Button>*/}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 xs:justify-center">
            {vehicle.maintenance_date && (
              <Cell title="Mantenimiento">
                {new Date(vehicle.maintenance_date).toLocaleDateString()}
              </Cell>
            )}
            <Cell title="Estado">{vehicle.status}</Cell>
            <Cell title="Capacidad">{vehicle.capacity}</Cell>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

type CellProps = {
  children: ReactNode;
  title: string;
};

function Cell({ children, title }: CellProps) {
  return (
    <Badge className="flex gap-2 text-sm" variant={"outline"}>
      <p>{title}:</p>
      <p className="font-normal">{children}</p>
    </Badge>
  );
}

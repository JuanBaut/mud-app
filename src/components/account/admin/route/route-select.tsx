import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import allRouteRequest, {
  RouteResponse,
} from "@/queries/routes/all-routes-query";
import idRouteRequest from "@/queries/routes/id-route-request";
import routeAtom from "@/state/route-state";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { ChevronRight, Trash } from "lucide-react";

export default function RouteSelect() {
  const [selectedRoute, setSelectedRoute] = useAtom(routeAtom);

  const { data: routes } = useQuery({
    queryFn: () => allRouteRequest(),
    queryKey: ["routes"],
  });

  const selectRouteQuery = useMutation({
    mutationFn: (id: string) => idRouteRequest(id),
    onSuccess: (data: RouteResponse) => {
      setSelectedRoute(data);
    },
  });

  const handleSelectRoute = async (id: string) => {
    try {
      await selectRouteQuery.mutateAsync(id);
    } catch (error: any) {
      console.log(error?.message);
    }
  };

  return (
    <div className="flex flex-col">
      {routes ? (
        routes.map((route) => (
          <div key={route._id} className="flex justify-between">
            <div className="flex h-fit items-center gap-2 self-center">
              <Badge className="text-sm font-normal" variant={"outline"}>
                Notas: {route.notes}
              </Badge>
              <Badge className="text-sm font-normal" variant={"outline"}>
                Estado: {route.status}
              </Badge>
            </div>
            <div className="flex gap-2">
              <Button variant={"ghost"} size={"icon"}>
                <Trash className="size-5" />
              </Button>
              <Button
                onClick={() => handleSelectRoute(route._id)}
                variant={"ghost"}
                size={"icon"}
              >
                <ChevronRight className="size-6" />
              </Button>
            </div>
          </div>
        ))
      ) : (
        <p>No hay rutas disponibles</p>
      )}
    </div>
  );
}

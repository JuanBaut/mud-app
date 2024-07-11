import { RouteResponse } from "@/queries/routes/all-routes-query";
import { atom } from "jotai";

const routeAtom = atom<RouteResponse | undefined>(undefined);

export default routeAtom;

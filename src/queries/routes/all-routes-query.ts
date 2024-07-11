import { AxiosResponse } from "axios";
import instance from "../axios-instance";

export interface RouteResponse {
  _id: string;
  carrierDni: string;
  departure: string;
  stops: string[];
  destination: string;
  notes: string;
  status: string;
  origin_date: string;
}

export default async function allRouteRequest() {
  try {
    const response: AxiosResponse = await instance({
      method: "get",
      url: "/paths/all",
    });

    const routes: RouteResponse[] = await response.data;
    return routes;
  } catch (error: any) {
    throw Error(error.response?.data?.error || error);
  }
}

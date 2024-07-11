import { AxiosResponse } from "axios";
import instance from "../axios-instance";

export interface RequestData {
  carrierDni: string;
  departure: string;
  stops: string[];
  notes: string;
  status: string;
}

export default async function RouteRequest(data: RequestData) {
  try {
    const response: AxiosResponse = await instance({
      method: "post",
      url: "/paths/create",
      data,
    });

    const route = await response.data.path;
    return route;
  } catch (error: any) {
    throw Error(error.response?.data?.error || error);
  }
}

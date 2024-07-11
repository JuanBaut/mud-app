import instance from "@/queries/axios-instance";
import { AxiosResponse } from "axios";
import { Vehicle } from "./vehicle-type";

export default async function FleetGet(): Promise<Vehicle[]> {
  try {
    const response: AxiosResponse<Vehicle[]> = await instance.get("/vehicles");
    return response.data;
  } catch (error: any) {
    const errorResponse: AxiosResponse = error?.response;
    console.error("Error fetching vehicles data", errorResponse?.data);
    throw errorResponse?.data;
  }
}

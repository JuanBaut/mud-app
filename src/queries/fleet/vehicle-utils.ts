import instance from "@/queries/axios-instance";
import { AxiosResponse } from "axios";
import { Vehicle } from "./vehicle-type";

export async function deleteVehicle(id: string): Promise<void> {
  try {
    await instance.delete(`vehicles/delete/${id}`);
  } catch (error: any) {
    const errorResponse: AxiosResponse = error?.response;
    console.error("Error deleting vehicle", errorResponse?.data);
    throw errorResponse?.data;
  }
}

// no funciona
export async function updateVehicle(
  id: string,
  vehiculo: Vehicle,
): Promise<Vehicle> {
  try {
    const response: AxiosResponse<Vehicle> = await instance.put(
      `/update/${id}`,
      vehiculo,
    );
    return response.data;
  } catch (error: any) {
    const errorResponse: AxiosResponse = error?.response;
    console.error("Error updating vehicle", errorResponse?.data);
    throw errorResponse?.data;
  }
}

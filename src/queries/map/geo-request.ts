import { AxiosResponse } from "axios";
import instance from "../axios-instance";
import { Address, Coordinates } from "./geo-type";

export default async function GeoRequest(data: Address): Promise<Coordinates> {
  try {
    let address = { address: Object.values(data).join(", ") };

    console.log("Address enviada:", address);

    const response: AxiosResponse<Coordinates> = await instance({
      method: "post",
      url: "/paths/geo",
      data: address,
    });

    console.log("reespuesta:", response.data);
    return response.data;
  } catch (error: any) {
    console.error(
      "Error fetching coordinates:",
      error.response?.data?.error || error,
    );
    throw Error(error.response?.data?.error || error);
  }
}

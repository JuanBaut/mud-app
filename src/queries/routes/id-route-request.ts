import { AxiosResponse } from "axios";
import instance from "../axios-instance";

export default async function idRouteRequest(id: string) {
  try {
    const response: AxiosResponse = await instance({
      method: "get",
      url: `/paths/id/${id}`,
    });

    const route = await response.data;
    return route;
  } catch (error: any) {
    throw Error(error.response?.data?.error || error);
  }
}

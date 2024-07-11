import instance from "@/queries/axios-instance";
import { AxiosResponse } from "axios";
import { User } from "./users-type";

export default async function UsersGet(): Promise<User[]> {
  try {
    console.log(process.env.API);

    const response: AxiosResponse<User[]> = await instance.get("/users/");
    return response.data;
  } catch (error: any) {
    const errorResponse: AxiosResponse = error?.response;
    console.error("Error fetching users data", errorResponse?.data);
    throw errorResponse?.data;
  }
}

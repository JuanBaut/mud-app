import { AxiosResponse } from "axios";
import instance from "../axios-instance";

export interface SignupData {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  password: string;
  dni: string;
}

export default async function SignupRequest(data: SignupData) {
  try {
    const response: AxiosResponse = await instance({
      method: "post",
      url: "/users/signup",
      data,
    });

    return response;
  } catch (error: any) {
    throw Error(error.response?.data?.error || error);
  }
}

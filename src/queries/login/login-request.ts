import { AxiosResponse } from "axios";
import instance from "../axios-instance";

export interface LoginData {
  email: string;
  password: string;
}

export default async function LoginRequest(data: LoginData) {
  try {
    const response: AxiosResponse = await instance({
      method: "post",
      url: "/users/login",
      data,
    });

    const token = await response.data.token;
    return token;
  } catch (error: any) {
    throw Error(error.response?.data?.error || error);
  }
}

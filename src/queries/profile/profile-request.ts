import { AxiosResponse } from "axios";
import instance from "../axios-instance";

export interface UserData {
  _id: string;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  password: string;
  dni: string;
  role: string;
  status: string;
  password_code: null;
  signup_date: string;
  path: [];
}

export default async function ProfileRequest(token: string) {
  try {
    const response: AxiosResponse = await instance({
      method: "get",
      url: "/users/profile",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userData = response.data;
    return userData;
  } catch (error: any) {
    console.error(error.response?.data?.error || error);
    throw Error(error.response?.data?.error || error);
  }
}

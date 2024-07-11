import instance from "@/queries/axios-instance";
import { AxiosResponse } from "axios";

export async function deleteUser(id: string): Promise<void> {
  try {
    await instance.delete(`users/delete/${id}`);
  } catch (error: any) {
    const errorResponse: AxiosResponse = error?.response;
    console.error("Error deleting user", errorResponse?.data);
    throw errorResponse?.data;
  }
}

export async function changeRole(id: string): Promise<void> {
  try {
    await instance.put(`users/role/${id}`);
  } catch (error: any) {
    const errorResponse: AxiosResponse = error?.response;
    console.error("Error changing user role", errorResponse?.data);
    throw errorResponse?.data;
  }
}

export async function changeStatus(id: string): Promise<void> {
  try {
    await instance.put(`users/status/${id}`);
  } catch (error: any) {
    const errorResponse: AxiosResponse = error?.response;
    console.error("Error changing user status...", errorResponse?.data);
    throw errorResponse?.data;
  }
}

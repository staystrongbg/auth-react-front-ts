import { AxiosRequestConfig } from "axios";
import { UserRequest } from "../interfaces";
import { client } from "./axiosClient";

export interface AxiosRequestIConfig extends AxiosRequestConfig {
  email: string;
  password: string;
}
export function register({ email, password }: AxiosRequestIConfig) {
  return client.post(
    "auth/register",
    { email, password },
    {
      headers: {
        Authorization: false,
      },
    }
  );
}

export function login({ email, password }: AxiosRequestIConfig) {
  return client.post(
    "auth/login",
    { email, password },
    {
      headers: {
        Authorization: false,
      },
    }
  );
}

export function getProfile() {
  return client.get("/users/profile");
}

import { InternalAxiosRequestConfig } from "axios";

export type Tokens = { accessToken: string; refreshToken: string };
export type MyActionData = {
  tokens?: Tokens | null;
  error?: string | null;
};
export type UserRequest = {
  password: string;
  email: string;
};

export interface MyInternalAxiosRequestConfig
  extends InternalAxiosRequestConfig {
  authorization: boolean;
}
export type HeaderOptions = {
  baseURL: string;
  timeout: number;
  headers: {
    "Content-Type": "application/json";
  };
};
export type AxiosClientParams = {
  options: HeaderOptions;
  getCurrentAccessToken: () => string | null;
  getCurrentRefreshToken: () => string | null;
  refreshTokenUrl: string;
  logout: () => void;
  setRefreshedTokens: (tokens: Tokens) => void;
};

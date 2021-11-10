import { request } from "api";

export const RegisterInfoRequest = async ({ loginData }: any) =>
  request("/api/register/second/step", "POST", "JSON", false, loginData, true);

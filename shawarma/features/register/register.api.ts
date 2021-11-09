import { request } from "api";

export const RegisterRequest = async ({ loginData, setError }: any) =>
  request("/api/register", "POST", "JSON", loginData, setError);

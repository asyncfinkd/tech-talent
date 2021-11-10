import { request } from "api";

export const ManagerRegisterRequest = async ({
  loginData,
  setError,
}: {
  loginData: any;
  setError: any;
}) =>
  request("/api/manager/register", "POST", "JSON", setError, loginData, false);

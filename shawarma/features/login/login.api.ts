import { request } from "api";
import { Props } from "types/login";

export const LoginRequest = async ({
  loginData,
  setError,
}: {
  loginData: Props;
  setError: boolean | any;
}) => request("/api/login", "POST", "JSON", loginData, setError);

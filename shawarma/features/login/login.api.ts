import { request } from "api";
import { Props } from "types/login";

export const LoginRequest = async ({
  loginData,
  setError,
}: {
  loginData: Props;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}) => request("/api/login", "POST", "JSON", setError, loginData);

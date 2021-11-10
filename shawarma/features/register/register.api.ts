import { request } from "api";
import { Input } from "types/register/candidate";

export const RegisterRequest = async ({
  loginData,
  setError,
}: {
  loginData: Input;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}) => request("/api/register", "POST", "JSON", setError, loginData, false);

import { request } from "api";
import { Input } from "types/register/candidate/info";

export const RegisterInfoRequest = async ({
  loginData,
  setError,
}: {
  loginData: Input;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
}) =>
  request(
    "/api/register/second/step",
    "POST",
    "JSON",
    setError,
    loginData,
    true
  );

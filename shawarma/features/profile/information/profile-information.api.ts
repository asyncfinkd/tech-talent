import { request } from "api";

export const ProfileInformationRequest = async ({ loginData, setError }: any) =>
  request(
    "/api/update/profile/information",
    "POST",
    "JSON",
    setError,
    loginData,
    true
  );

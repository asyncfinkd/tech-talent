import { request } from "api";

export const ProfileSecurityRequest = async ({ loginData, setError }: any) =>
  request(
    "/api/update/profile/security",
    "POST",
    "JSON",
    setError,
    loginData,
    true
  );

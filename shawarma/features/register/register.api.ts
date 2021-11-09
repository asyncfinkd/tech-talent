import { request } from "api";

// export const RegisterRequest = async (
//   loginData: {
//     email: string;
//     password: string;
//   },
//   interest: string | string[] | undefined,
//   setErrorMessage: React.Dispatch<React.SetStateAction<boolean>>
// ): Promise<Result> => {
//   const { email, password } = loginData;
//   const response = await fetch(
//     `${process.env.REACT_APP_API_URL}/api/register`,
//     {
//       method: "POST",
//       headers: { "Content-type": "application/json" },
//       body: JSON.stringify({ email, password, role: "member", interest }),
//     }
//   );
//   if (response.ok) setErrorMessage(false);

//   if (response.ok) {
//     return response.json();
//   } else {
//     const error = await response.json();
//     if (error) {
//       setErrorMessage(true);
//     }

//     return Promise.reject({
//       ...error,
//     });
//   }
// };

export const RegisterRequest = async ({ loginData, setError }: any) =>
  request("/api/register", "POST", "JSON", loginData, setError);

import { Result } from "types/features/forgot";

export const ForgotRequest = async (
  loginData: {
    email: string;
  },
  setShowErrorMessage: React.Dispatch<React.SetStateAction<boolean>>
): Promise<Result> => {
  const { email } = loginData;
  const response = await fetch(`${process.env.REACT_APP_API_URL}/api/forgot`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ email }),
  });
  if (response.ok) setShowErrorMessage(false);

  if (response.ok) {
    return response.json();
  } else {
    const error = await response.json();
    if (error) {
      setShowErrorMessage(true);
    }

    return Promise.reject({
      ...error,
    });
  }
};

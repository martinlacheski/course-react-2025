import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "../interfaces/auth.response";

interface RegisterError {
  response?: {
    data?: {
      message?: string;
    };
  };
}

export const registerUserAction = async (
  fullName: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  try {
    const { data } = await tesloApi.post<AuthResponse>("/auth/register", {
      fullName,
      email,
      password,
    });

    return data;
  } catch (error) {
    console.log(error);
    throw new Error(
      (error as RegisterError).response?.data?.message || "Error al registrarse"
    );
  }
};

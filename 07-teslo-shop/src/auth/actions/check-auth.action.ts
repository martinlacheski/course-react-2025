import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "../interfaces/auth.response";

export const checkAuthAction = async (): Promise<AuthResponse> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("No hay ningún token");

  try {
    const { data } = await tesloApi.get<AuthResponse>("/auth/check-status");

    localStorage.setItem("token", data.token);

    return data;
  } catch {
    localStorage.removeItem("token");
    throw new Error("Token expirado o no válido");
  }
};

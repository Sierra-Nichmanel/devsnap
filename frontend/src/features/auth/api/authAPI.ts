import api from "@/app/api";
import type { LoginRequest, SignupRequest, AuthResponse } from "@/types/auth";
import type { ApiResponse } from "@/types/api";

export const login = async (
  data: LoginRequest,
): Promise<ApiResponse<AuthResponse>> => {
  const response = await api.post("/auth/login", data);

  return response.data;
};

export const signup = async (
  data: SignupRequest,
): Promise<ApiResponse<AuthResponse>> => {
  const response = await api.post("/auth/signup", data);

  return response.data;
};

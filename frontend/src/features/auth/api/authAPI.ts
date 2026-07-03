import api from "@/lib/api";
import type { LoginResponse, SignupResponse } from "@/types/auth";

export const loginUser = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const res = await api.post("/auth/login", {
    email,
    password,
  });

  return res.data;
};

export const signupUser = async (
  name: string,
  email: string,
  password: string,
): Promise<SignupResponse> => {
  const res = await api.post("/auth/signup", {
    name,
    email,
    password,
  });

  return res.data;
};

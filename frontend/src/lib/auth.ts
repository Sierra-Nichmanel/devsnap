import { api } from "./api";

export const loginUser = async (email: string, password: string) => {
  return api<{
      data: any; token: string 
}>("/auth/login", {
    method: "POST",
    body: { email, password },
  });
};

import { useMutation } from "@tanstack/react-query";
import api from "@/lib/api";
import { setToken } from "@/lib/auth";

interface LoginData {
  email: string;
  password: string;
}

export const useLogin = () => {
  return useMutation({
    mutationFn: async (data: LoginData) => {
      const res = await api.post("/auth/login", data);
      return res.data;
    },

    onSuccess: (data) => {
      setToken(data.token);
    },
  });
};

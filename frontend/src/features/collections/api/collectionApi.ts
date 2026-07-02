import api from "@/app/api";
import type { ApiResponse } from "@/types/api";
import type { Collection } from "@/types/collection";

export const getCollections = async () => {
  const response = await api.get<ApiResponse<Collection[]>>("/collections");

  return response.data;
};

export const createCollection = async (title: string, description: string) => {
  const response = await api.post("/collections", {
    title,
    description,
  });

  return response.data;
};

export const deleteCollection = async (id: number) => {
  const response = await api.delete(`/collections/${id}`);

  return response.data;
};

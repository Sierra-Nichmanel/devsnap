import api from "@/lib/api";
import type { ApiResponse } from "@/types/api";
import type { Collection } from "@/types/collection";

export const getCollections = async (): Promise<Collection[]> => {
  const res = await api.get<ApiResponse<Collection[]>>("/collections");
  return res.data.data;
};

export const createCollection = async (
  title: string,
  description: string,
): Promise<Collection> => {
  const res = await api.post<ApiResponse<Collection>>("/collections", {
    title,
    description,
  });

  return res.data.data;
};

export const deleteCollection = async (id: number): Promise<void> => {
  await api.delete(`/collections/${id}`);
};

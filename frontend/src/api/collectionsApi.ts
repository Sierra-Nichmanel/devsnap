import api from "./axios";

export const createCollection = async (data: {
  title: string;
  description?: string;
}) => {
  const res = await api.post("/collections", data);
  return res.data;
};

export const getCollections = async () => {
  const res = await api.get("/collections");
  return res.data;
};

export const deleteCollection = async (id: number) => {
  const res = await api.delete(`/collections/${id}`);
  return res.data;
};

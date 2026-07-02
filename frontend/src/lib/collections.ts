import { api } from "./api";

export const getCollections = (token: string) => {
  return api<any[]>("/collections", {
    method: "GET",
    token,
  });
};

export const createCollection = (token: string, data: any) => {
  return api("/collections", {
    method: "POST",
    token,
    body: data,
  });
};

export const deleteCollection = (token: string, id: number) => {
  return api(`/collections/${id}`, {
    method: "DELETE",
    token,
  });
};

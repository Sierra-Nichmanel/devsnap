import { useQuery } from "@tanstack/react-query";

import { getCollections } from "../api/collectionApi";

export const useCollections = () =>
  useQuery({
    queryKey: ["collections"],
    queryFn: getCollections,
  });

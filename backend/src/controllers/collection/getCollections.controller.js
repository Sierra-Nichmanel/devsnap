import { getCollections } from "../../services/collection.service.js";
import { successResponse } from "../../utils/apiResponse.js";

export const getCollectionsController = async (req, res) => {
  const collections = await getCollections(req.user.userId);

  return successResponse(res, "Collections fetched successfully", collections);
};

import { deleteCollection } from "../../services/collection.service.js";
import { successResponse, errorResponse } from "../../utils/apiResponse.js";

export const deleteCollectionController = async (req, res) => {
  const deleted = await deleteCollection(
    Number(req.params.id),
    req.user.userId,
  );

  if (!deleted) {
    return errorResponse(res, "Collection not found", 404);
  }

  return successResponse(res, "Collection deleted successfully");
};

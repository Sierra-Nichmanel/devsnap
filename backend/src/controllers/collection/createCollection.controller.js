import { createCollection } from "../../services/collection.service.js";
import { successResponse, errorResponse } from "../../utils/apiResponse.js";

export const createCollectionController = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return errorResponse(res, "Title is required", 400);
    }

    const collection = await createCollection(
      title,
      description,
      req.user.userId,
    );

    return successResponse(
      res,
      "Collection created successfully",
      collection,
      201,
    );
  } catch (error) {
    console.error(error);

    return errorResponse(res, "Unable to create collection");
  }
};

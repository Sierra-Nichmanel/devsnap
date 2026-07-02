import express from "express";

import { protect } from "../middleware/auth.middleware.js";

import { createCollectionController } from "../controllers/collection/createCollection.controller.js";
import { getCollectionsController } from "../controllers/collection/getCollections.controller.js";
import { deleteCollectionController } from "../controllers/collection/deleteCollection.controller.js";

const router = express.Router();

router.use(protect);

router.get("/", getCollectionsController);

router.post("/", createCollectionController);

router.delete("/:id", deleteCollectionController);

export default router;

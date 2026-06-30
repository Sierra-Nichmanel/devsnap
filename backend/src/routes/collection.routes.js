import express from "express";
import {
  create,
  getAll,
  remove,
} from "../controllers/collection.controller.js";

import { authMiddleware } from "../middleware/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", create);
router.get("/", getAll);
router.delete("/:id", remove);

export default router;

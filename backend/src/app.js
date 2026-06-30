import express from "express";
import cors from "cors";

import authRoutes from "./routes/auth.routes.js";
import collectionRoutes from "./routes/collection.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/collections", collectionRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "DevSnap API Running",
  });
});

export default app;

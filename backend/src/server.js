import app from "./app.js";
import { PORT } from "./config/env.js";
import authRoutes from "./routes/auth.routes.js";


app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/env.js";

export function authMiddleware(req, res, next) {
  try {
    const header = req.headers.authorization;

    if (!header) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = header.split(" ")[1];

    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded; // attach user to request

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
}

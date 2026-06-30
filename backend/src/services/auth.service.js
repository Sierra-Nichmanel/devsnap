import { prisma } from "../config/prisma.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

export async function registerUser({ name, email, password }) {
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  return user;
}

export async function loginUser({ email, password }) {
  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isValid = await bcrypt.compare(password, user.password);

  if (!isValid) {
    throw new Error("Invalid credentials");
  }

  const token = generateToken({
    id: user.id,
    email: user.email,
  });

  return { user, token };
}

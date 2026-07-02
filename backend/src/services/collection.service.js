import { prisma } from "../config/prisma.js";

export const createCollection = async (title, description, userId) => {
  return await prisma.collection.create({
    data: {
      title,
      description,
      userId,
    },
  });
};

export const getCollections = async (userId) => {
  return await prisma.collection.findMany({
    where: {
      userId,
    },

    orderBy: {
      createdAt: "desc",
    },
  });
};

export const deleteCollection = async (id, userId) => {
  const collection = await prisma.collection.findFirst({
    where: {
      id,
      userId,
    },
  });

  if (!collection) {
    return null;
  }

  await prisma.collection.delete({
    where: {
      id,
    },
  });

  return collection;
};
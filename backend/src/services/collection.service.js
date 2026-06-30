import { prisma } from "../config/prisma.js";

export async function createCollection(userId, data) {
  return await prisma.collection.create({
    data: {
      title: data.title,
      description: data.description,
      userId,
    },
  });
}

export async function getUserCollections(userId) {
  return await prisma.collection.findMany({
    where: { userId },
  });
}

export async function deleteCollection(userId, collectionId) {
  return await prisma.collection.deleteMany({
    where: {
      id: collectionId,
      userId,
    },
  });
}

import {
  createCollection,
  getUserCollections,
  deleteCollection,
} from "../services/collection.service.js";

export async function create(req, res) {
  try {
    const collection = await createCollection(req.user.id, req.body);

    res.status(201).json({
      success: true,
      data: collection,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function getAll(req, res) {
  try {
    const collections = await getUserCollections(req.user.id);

    res.json({
      success: true,
      data: collections,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export async function remove(req, res) {
  try {
    await deleteCollection(req.user.id, parseInt(req.params.id));

    res.json({
      success: true,
      message: "Deleted successfully",
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import {
  getCollections,
  createCollection,
  deleteCollection,
} from "../lib/collections";

export default function Dashboard() {
  const { token } = useAuth();
  const [collections, setCollections] = useState<any[]>([]);
  const [title, setTitle] = useState("");

  const load = async () => {
    if (!token) return;
    const data = await getCollections(token);
    setCollections(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleCreate = async () => {
    if (!token) return;

    await createCollection(token, {
      title,
      description: "New collection",
    });

    setTitle("");
    load();
  };

  const handleDelete = async (id: number) => {
    if (!token) return;

    await deleteCollection(token, id);
    load();
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Collections</h1>

      <div className="flex gap-2">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2"
          placeholder="New collection"
        />

        <button onClick={handleCreate} className="bg-black text-white px-4">
          Create
        </button>
      </div>

      <div className="grid gap-2 mt-4">
        {collections.map((c) => (
          <div key={c.id} className="border p-3 flex justify-between">
            <div>
              <p className="font-semibold">{c.title}</p>
              <p className="text-sm text-gray-500">{c.description}</p>
            </div>

            <button onClick={() => handleDelete(c.id)} className="text-red-500">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

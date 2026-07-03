import { useEffect, useState } from "react";
import { getCollections } from "../api/collectionsApi";

export default function Dashboard() {
  const [collections, setCollections] = useState<any[]>([]);

  useEffect(() => {
    getCollections().then((res) => {
      setCollections(res.data);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="mt-4 space-y-2">
        {collections.map((c) => (
          <div key={c.id} className="p-3 border rounded ">
            {c.title}
          </div>
        ))}
      </div>
    </div>
  );
}

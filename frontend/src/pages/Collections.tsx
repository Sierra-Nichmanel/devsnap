import { useState } from "react";
import { Plus, Search } from "lucide-react";

import { useCollections } from "@/features/collections/hooks/useCollections";
import CollectionGrid from "@/features/collections/components/CollectionGrid";
import CreateCollectionModal from "@/features/collections/components/CreateCollectionModal";

const Collections = () => {
  const { data, isLoading } = useCollections();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const filtered = data?.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()),
    );
    

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Collections</h1>

          <p className="text-sm text-slate-500">
            Organize your API requests into collections
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
        >
          <Plus size={18} />
          New Collection
        </button>
      </div>

      {/* SEARCH */}
      <div className="relative">
        <Search className="absolute left-3 top-3 text-slate-400" size={18} />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search collections..."
          className="w-full rounded-xl border bg-white py-2 pl-10 pr-4 outline-none focus:border-blue-500"
        />
      </div>

      {/* CONTENT */}
      {isLoading ? (
        <div className="text-slate-500">Loading collections...</div>
      ) : filtered?.length ? (
        <CollectionGrid collections={filtered} />
      ) : (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed p-16 text-center">
          <div className="text-4xl">📁</div>

          <h2 className="mt-4 text-xl font-semibold">No Collections Yet</h2>

          <p className="mt-2 text-slate-500">
            Create your first API collection to get started
          </p>

          <button
            onClick={() => setOpen(true)}
            className="mt-6 rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
          >
            Create Collection
          </button>
        </div>
      )}

      {/* MODAL */}
      <CreateCollectionModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default Collections;

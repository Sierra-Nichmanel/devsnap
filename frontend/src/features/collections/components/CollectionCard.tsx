import { Folder, MoreVertical } from "lucide-react";
import { motion } from "framer-motion";
import type { Collection } from "../types/collection";

interface Props {
  collection: Collection;
}

const CollectionCard = ({ collection }: Props) => {
    return (
     
        <motion.div
          whileHover={{ y: -6 }}
          className="group relative rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-xl"
        >
          {/* top row */}
          <div className="flex items-start justify-between">
            <Folder className="text-blue-600" />

            <button className="opacity-0 transition group-hover:opacity-100">
              <MoreVertical size={18} />
            </button>
          </div>

          {/* content */}
          <h2 className="mt-4 text-lg font-semibold">{collection.title}</h2>

          <p className="mt-1 text-sm text-slate-500">
            {collection.description || "No description"}
          </p>

          {/* footer */}
          <div className="mt-4 text-xs text-slate-400">ID: {collection.id}</div>
        </motion.div>
    );
};

export default CollectionCard;

import CollectionCard from "./CollectionCard";
import type { Collection } from "../types/collection";

interface Props {
  collections: Collection[];
}

const CollectionGrid = ({ collections }: Props) => {
  return (
    <div
      className="
      grid
      gap-6

      sm:grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      2xl:grid-cols-4
    "
    >
      {collections.map((collection) => (
        <CollectionCard key={collection.id} collection={collection} />
      ))}
    </div>
  );
};

export default CollectionGrid;

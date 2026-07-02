interface EmptyStateProps {
  title: string;
  description: string;
}

const EmptyState = ({ title, description }: EmptyStateProps) => {
  return (
    <div className="rounded-xl border-2 border-dashed bg-white py-24 text-center">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <p className="mt-3 text-slate-500">{description}</p>
    </div>
  );
};

export default EmptyState;

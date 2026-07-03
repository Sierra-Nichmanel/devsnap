export default function AuthDivider() {
  return (
    <div className="relative py-6">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>

      <div className="relative flex justify-center">
        <span className="bg-white px-4 text-sm text-slate-500">OR</span>
      </div>
    </div>
  );
}

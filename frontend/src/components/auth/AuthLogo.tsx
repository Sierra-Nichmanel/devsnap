import { Code2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function AuthLogo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg">
        <Code2 size={24} />
      </div>

      <div>
        <h1 className="text-xl font-bold text-slate-900">DevSnap</h1>

        <p className="text-sm text-slate-500">API Workspace</p>
      </div>
    </Link>
  );
}

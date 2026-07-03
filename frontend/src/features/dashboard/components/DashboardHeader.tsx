import { Search, Bell } from "lucide-react";

export default function DashboardHeader() {
  return (
    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
      <div>
        <h1 className="text-3xl font-bold">Welcome Back 👋</h1>

        <p className="mt-1 text-slate-500">
          Here's what's happening inside your workspace.
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-3 text-slate-400" />

          <input
            placeholder="Search..."
            className="h-11 w-72 rounded-xl border bg-white pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        <button className="rounded-xl border bg-white p-3 hover:bg-slate-50">
          <Bell size={18} />
        </button>
      </div>
    </div>
  );
}

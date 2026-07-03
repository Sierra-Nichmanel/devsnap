import {
  LayoutDashboard,
  Folder,
  Send,
  Settings,
  LogOut,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useUI } from "@/context/UIContext";

const Sidebar = () => {
  const { mobileSidebarOpen, setMobileSidebarOpen } = useUI();

  const linkClass = ({ isActive }: any) =>
    `flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
      isActive ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-slate-100"
    }`;

  return (
    <>
      {/* OVERLAY (mobile only) */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed left-0 top-0 z-50 h-full w-64 transform bg-white p-4 transition-transform duration-300
          md:static md:translate-x-0 md:border-r md:border-slate-200
          ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
        `}
      >
        {/* HEADER */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-lg font-bold">DevSnap</div>

          {/* CLOSE BUTTON (mobile only) */}
          <button
            className="rounded-lg p-2 hover:bg-slate-100 md:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          >
            <X size={18} />
          </button>
        </div>

        {/* NAV */}
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard" className={linkClass}>
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>

          <NavLink to="/collections" className={linkClass}>
            <Folder size={18} /> Collections
          </NavLink>

          <NavLink to="/requests" className={linkClass}>
            <Send size={18} /> Requests
          </NavLink>

          <NavLink to="/settings" className={linkClass}>
            <Settings size={18} /> Settings
          </NavLink>
        </nav>

        {/* FOOTER */}
        <div className="mt-auto pt-6">
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-sm text-red-500 hover:bg-red-50">
            <LogOut size={18} /> Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

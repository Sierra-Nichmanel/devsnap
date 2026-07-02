import { Outlet, Link } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-slate-800">
        <h1 className="font-bold text-lg">DevSnap</h1>

        <div className="flex gap-4">
          <Link to="/" className="hover:text-slate-300">
            Home
          </Link>
          <Link to="/login" className="hover:text-slate-300">
            Login
          </Link>
          <Link to="/dashboard" className="hover:text-slate-300">
            Dashboard
          </Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;

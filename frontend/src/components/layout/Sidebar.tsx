import { Link, useLocation } from "react-router-dom";

const links = [
  {
    name: "Dashboard",
    path: "/dashboard",
  },
  {
    name: "Collections",
    path: "/collections",
  },
  {
    name: "Settings",
    path: "/settings",
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="w-64 bg-slate-950 text-white flex flex-col">
      <div className="border-b border-slate-800 p-6">
        <h1 className="text-2xl font-bold">DevSnap</h1>
      </div>

      <nav className="flex-1 p-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`block rounded-lg px-4 py-3 mb-2 transition

            ${
              location.pathname === link.path
                ? "bg-blue-600"
                : "hover:bg-slate-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

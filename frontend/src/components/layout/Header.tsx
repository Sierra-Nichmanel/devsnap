import { useAuth } from "@/context/AuthContext";

const Header = () => {
  const { logout } = useAuth();

  return (
    <header className="flex items-center justify-between border-b bg-white px-8 py-4">
      <div>
        <h2 className="text-xl font-semibold">Dashboard</h2>
      </div>

      <button
        onClick={logout}
        className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
      >
        Logout
      </button>
    </header>
  );
};

export default Header;

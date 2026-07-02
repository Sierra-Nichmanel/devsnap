import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      login(data.data.token);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div>
            <form
            onSubmit={handleSignup}
            className="bg-black text-white border rounded-2xl p-6 w-96 space-y-4"
            >
                  <h1 className="text-xl font-bold text-center">SIGN UP</h1>
                  <h3 className="text-center">Enter Your details below</h3>

            {error && <p className="text-red-500">{error}</p>}

            <input
                placeholder="Full Name"
                className="w-full border rounded-2xl p-2 bg-white text-slate-900"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                placeholder="Email"
                className="w-full border rounded-2xl p-2 bg-white text-slate-900"
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                placeholder="Password"
                type="password"
                className="w-full border rounded-2xl p-2 bg-white text-slate-900"
                onChange={(e) => setPassword(e.target.value)}
            />

            <button className="w-full bg-green-400 border-3 border-white rounded-2xl p-2 hover:bg-green-700 cursor-pointer">
                {loading ? "Creating..." : "Sign Up"}
            </button>
            </form>
        </div>
    </div>
  );
}

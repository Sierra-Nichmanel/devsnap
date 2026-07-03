import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { loginUser } from "../lib/auth";
import Logo from "@/components/ui/Logo";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const data = await loginUser(email, password);

      login(data.data.token);

      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-blue-500">
      <form
        onSubmit={handleLogin}
        className="w-[380px] rounded-2xl bg-white p-6 shadow-sm"
      >
        <div className="mb-6 px-22 flex justify-center">
          <Logo />
        </div>

        <h1 className="mb-6 text-center text-2xl font-bold">Welcome Back</h1>

              <div className="space-y-3">
                  <div>
                      
                  </div>
                  <div>
                      
                  </div>
          <Input
            className="mt-4 mb-8"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            className="mt-4 mb-8"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          disabled={loading}
          className={`w-full py-2 mt-12 rounded text-white transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-800"
          }`}
        >
          {loading ? "Logging in..." : "Login"}
        </Button>
      </form>
    </div>
  );
}

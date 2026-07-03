import type { ReactNode } from "react";
import AuthLogo from "./AuthLogo";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({ title, subtitle, children }: Props) {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* LEFT */}

        <div className="hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 p-16 text-white lg:flex lg:flex-col lg:justify-between">
          <AuthLogo />

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              Build APIs
              <br />
              Faster Than Ever.
            </h1>

            <p className="mt-8 max-w-md text-lg text-blue-100">
              DevSnap helps developers organize collections, test endpoints, and
              collaborate with ease.
            </p>

            <div className="mt-14 space-y-6">
              <div>✓ JWT Authentication</div>

              <div>✓ REST API Testing</div>

              <div>✓ Organized Collections</div>

              <div>✓ Modern Developer Experience</div>
            </div>
          </div>

          <p className="text-blue-200">© 2026 DevSnap</p>
        </div>

        {/* RIGHT */}

        <div className="flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="mb-10">
              <AuthLogo />

              <h2 className="mt-8 text-3xl font-bold">{title}</h2>

              <p className="mt-2 text-slate-500">{subtitle}</p>
            </div>

            <div className="rounded-3xl border bg-white p-8 shadow-xl">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

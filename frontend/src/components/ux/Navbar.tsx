import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#docs" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 transition hover:opacity-80"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md">
              <Code2 size={22} />
            </div>

            <div>
              <h1 className="text-lg font-bold text-slate-900">DevSnap</h1>

              <p className="-mt-1 text-xs text-slate-500">API Workspace</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden items-center gap-3 md:flex">
            <NavLink to="/login">
              <Button variant="ghost" className="rounded-xl">
                Sign In
              </Button>
            </NavLink>

            <NavLink to="/signup">
              <Button className="rounded-xl bg-blue-600 px-6 hover:bg-blue-700">
                Get Started
              </Button>
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 transition hover:bg-slate-100 md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 250, damping: 28 }}
              className="fixed right-0 top-0 z-50 flex h-screen w-72 flex-col bg-white shadow-2xl md:hidden"
            >
              <div className="flex items-center justify-between border-b p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                    <Code2 size={20} />
                  </div>

                  <div>
                    <h2 className="font-bold">DevSnap</h2>
                    <p className="text-xs text-slate-500">API Workspace</p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-lg p-2 hover:bg-slate-100"
                >
                  <X />
                </button>
              </div>

              <nav className="flex flex-col gap-2 p-6">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-slate-700 transition hover:bg-slate-100"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto space-y-3 p-6">
                <NavLink to="/login" onClick={() => setOpen(false)}>
                  <Button variant="outline" className="w-full rounded-xl">
                    Sign In
                  </Button>
                </NavLink>

                <NavLink to="/signup" onClick={() => setOpen(false)}>
                  <Button className="w-full rounded-xl bg-blue-600 hover:bg-blue-700">
                    Get Started
                  </Button>
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

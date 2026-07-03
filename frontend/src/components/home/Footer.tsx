import { Code2, } from "lucide-react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}

          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
                <Code2 />
              </div>

              <div>
                <h2 className="text-xl font-bold text-white">DevSnap</h2>

                <p className="text-sm text-slate-400">Modern API Workspace</p>
              </div>
            </div>

            <p className="mt-6 leading-7">
              Build, organize and test APIs in one beautiful workspace.
            </p>
          </div>

          {/* Product */}

          <div>
            <h3 className="font-semibold text-white">Product</h3>

            <ul className="mt-5 space-y-3">
              <li>Collections</li>
              <li>Requests</li>
              <li>History</li>
              <li>Workspaces</li>
            </ul>
          </div>

          {/* Resources */}

          <div>
            <h3 className="font-semibold text-white">Resources</h3>

            <ul className="mt-5 space-y-3">
              <li>Documentation</li>
              <li>Roadmap</li>
              <li>Support</li>
              <li>API Reference</li>
            </ul>
          </div>

          {/* Company */}

          <div>
            <h3 className="font-semibold text-white">Company</h3>

            <ul className="mt-5 space-y-3">
              <li>About</li>
              <li>Privacy</li>
              <li>Terms</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-slate-800 pt-8 md:flex-row">
          <p className="text-sm text-slate-500">
            © 2026 DevSnap. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              to="#"
              className="rounded-xl p-2 transition hover:bg-slate-800"
            >
              <FaGithub />
            </Link>

            <Link
              to="#"
              className="rounded-xl p-2 transition hover:bg-slate-800"
            >
              <FaLinkedin />
            </Link>

            <Link
              to="#"
              className="rounded-xl p-2 transition hover:bg-slate-800"
            >
              <FaTwitter />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

import {
  FolderKanban,
  Send,
  ShieldCheck,
  Zap,
  Users,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: FolderKanban,
    title: "Organized Collections",
    description:
      "Keep your APIs neatly grouped into collections for faster development and easier collaboration.",
  },
  {
    icon: Send,
    title: "Powerful Request Builder",
    description:
      "Build and test REST APIs with headers, query parameters, authentication and request bodies.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "JWT-secured workspace with protected routes and enterprise-ready authentication.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Built with React, TypeScript and modern tooling for an incredibly smooth experience.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Share collections and work together with your teammates without losing productivity.",
  },
  {
    icon: Cloud,
    title: "Cloud Ready",
    description:
      "Access your collections anywhere with future cloud sync and workspace support.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Everything You Need
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            A Modern Workspace
            <br />
            Built for Developers
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            DevSnap combines API testing, organization, collaboration, and
            productivity into one beautiful workspace.
          </p>
        </motion.div>

        {/* Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.45,
                }}
                whileHover={{
                  y: -8,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-blue-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={28} />
                </div>

                <h3 className="mt-8 text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

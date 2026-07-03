import { ArrowRight, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-100" />

      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-blue-300/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-300/20 blur-3xl" />
  
      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pt-24">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="rounded-full border border-blue-200 bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Built for Developers 🚀
            </span>

            <h1 className="mt-8 text-6xl font-extrabold leading-tight text-slate-900">
              Build,
              <span className="text-blue-600"> Test</span>, Debug &
              <span className="text-blue-600"> Share APIs</span>
              <br />
              Faster Than Ever.
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-9 text-slate-600">
              DevSnap is the modern API workspace that helps developers organize
              collections, test endpoints, collaborate with teams, and build
              APIs effortlessly.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="rounded-xl bg-blue-600 px-8 hover:bg-blue-700"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button size="lg" variant="outline" className="rounded-xl">
                <PlayCircle className="mr-2 h-5 w-5" />
                Live Demo
              </Button>
            </div>

            <div className="mt-12 flex gap-10">
              <div>
                <h2 className="text-4xl font-bold text-slate-900">10K+</h2>

                <p className="text-slate-500">Requests Executed</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-slate-900">1K+</h2>

                <p className="text-slate-500">Collections</p>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-slate-900">99.9%</h2>

                <p className="text-slate-500">Reliability</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

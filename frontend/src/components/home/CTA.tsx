import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 px-10 py-20 text-center text-white shadow-2xl">
          <h2 className="text-5xl font-bold">Ready to Build APIs Faster?</h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Join developers using DevSnap to organize collections, test APIs,
            and ship software with confidence.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link to="/signup">
              <Button
                size="lg"
                className="rounded-xl bg-white px-8 text-blue-700 hover:bg-slate-100"
              >
                Start Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link to="/login">
              <Button
                size="lg"
                variant="outline"
                className="rounded-xl border-white bg-transparent px-8 text-white hover:bg-white hover:text-blue-700"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Frontend Engineer",
    company: "TechFlow",
    quote:
      "DevSnap makes API testing incredibly intuitive. It's much cleaner than the tools I used before.",
  },
  {
    name: "David Chen",
    role: "Backend Developer",
    company: "CloudLabs",
    quote:
      "Collections are beautifully organized and testing endpoints is ridiculously fast.",
  },
  {
    name: "Michael Adams",
    role: "Software Engineer",
    company: "NovaStack",
    quote:
      "The interface feels premium and the workflow helps me stay productive every day.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Loved by Developers
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            We're building DevSnap to become the easiest API workspace for
            modern development teams.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="rounded-3xl border bg-slate-50 p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-8 text-slate-600 italic">
                "{testimonial.quote}"
              </p>

              <div className="mt-8">
                <h3 className="font-semibold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {testimonial.role} • {testimonial.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

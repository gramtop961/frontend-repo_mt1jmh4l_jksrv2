import { motion } from "framer-motion";
import { Sparkles, Shield, Zap, Palette } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "AI-assisted",
    desc: "Craft sections fast with smart defaults and delightful details.",
  },
  { icon: Shield, title: "Accessible", desc: "Built with sensible contrast and keyboard flows." },
  { icon: Zap, title: "Fast", desc: "Vite + React + Tailwind for instant iteration and deploys." },
  { icon: Palette, title: "Beautiful", desc: "Soft glass, tasteful gradients, and motion out of the box." },
];

export default function Features() {
  return (
    <section id="features" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Everything you need to ship better
          </h2>
          <p className="mt-3 text-white/70">
            Opinionated building blocks for modern landing pages and portfolios.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white/90 backdrop-blur"
            >
              <div className="mb-3 inline-flex rounded-lg bg-white/10 p-2">
                <Icon className="h-5 w-5" />
              </div>
              <div className="font-medium">{title}</div>
              <p className="mt-1 text-sm text-white/70">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

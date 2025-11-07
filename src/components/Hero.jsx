import { Rocket, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-yellow-300" />
            <span>Modern AI-first website kit</span>
          </div>

          <h1 className="font-display text-4xl font-semibold tracking-tight text-white sm:text-6xl">
            Build delightful sites in minutes
          </h1>
          <p className="mt-5 text-lg leading-8 text-white/70">
            A polished, minimal template with tasteful motion, glass surfaces, and
            gradients. Perfect for landing pages, portfolios, and product sites.
          </p>

          <div className="mt-10 flex items-center justify-center gap-3">
            <a
              href="#get-started"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-gray-900 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
            >
              <Rocket className="h-4 w-4" />
              Get Started
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>
        </motion.div>

        {/* Floating cards */}
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 mx-auto mt-24 hidden h-[480px] max-w-7xl overflow-visible md:block">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="absolute left-10 top-10 w-64 rounded-2xl border border-white/10 bg-white/10 p-4 text-white/80 backdrop-blur-xl"
          >
            <div className="text-sm font-medium">Live Preview</div>
            <div className="mt-2 h-24 rounded-xl bg-gradient-to-br from-white/20 to-white/5" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="absolute right-20 top-24 w-72 rounded-2xl border border-white/10 bg-white/10 p-4 text-white/80 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between text-sm font-medium">
              <span>Analytics</span>
              <span className="rounded-full bg-emerald-400/20 px-2 py-0.5 text-emerald-300">+24%</span>
            </div>
            <div className="mt-2 h-24 rounded-xl bg-gradient-to-br from-emerald-300/20 to-emerald-400/10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute left-1/2 top-52 w-56 -translate-x-1/2 rounded-2xl border border-white/10 bg-white/10 p-4 text-white/80 backdrop-blur-xl"
          >
            <div className="text-sm font-medium">Components</div>
            <div className="mt-2 grid grid-cols-3 gap-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-10 rounded-lg bg-white/10" />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

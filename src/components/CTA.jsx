import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section id="get-started" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-10 text-center text-white/90 backdrop-blur">
          <h3 className="font-display text-2xl font-semibold sm:text-3xl">
            Ready to build something lovely?
          </h3>
          <p className="mt-2 text-white/70">
            Start with the base, then remix sections to fit your brand.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-gray-900 transition hover:-translate-y-0.5 hover:shadow-lg hover:shadow-white/20"
            >
              Get the template
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import Hero from "./components/Hero";
import Features from "./components/Features";
import Showcase from "./components/Showcase";
import CTA from "./components/CTA";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0B10] text-white">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.04]"
        aria-hidden
      />

      {/* Content */}
      <header className="sticky top-0 z-40 border-b border-white/5 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-xl font-semibold tracking-tight">
            alllly
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#" className="hover:text-white">Pricing</a>
            <a href="#" className="hover:text-white">Docs</a>
            <a
              href="#get-started"
              className="rounded-xl bg-white px-4 py-2 font-medium text-gray-900 hover:shadow-lg hover:shadow-white/20"
            >
              Get Started
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Showcase />
        <CTA />
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>© {new Date().getFullYear()} alllly — Crafted with care</div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Twitter</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

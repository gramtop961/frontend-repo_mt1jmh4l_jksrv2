import { motion } from "framer-motion";

const gallery = [
  {
    title: "Elegant hero sections",
    img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Playful gradients",
    img: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop",
  },
  {
    title: "Thoughtful cards",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1400&auto=format&fit=crop",
  },
];

export default function Showcase() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Clean layouts that feel premium
          </h2>
          <p className="mt-3 text-white/70">
            A curated set of patterns to help your brand feel cohesive and calm.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06 }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex items-center justify-between p-4 text-white/90">
                <div className="font-medium">{card.title}</div>
                <div className="text-xs text-white/60">Template</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

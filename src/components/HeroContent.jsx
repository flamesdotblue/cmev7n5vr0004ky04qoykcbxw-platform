import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HeroContent = () => {
  return (
    <section className="relative mx-auto max-w-7xl pt-20 md:pt-28 pb-12">
      {/* Accent ring */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/40 to-fuchsia-500/30 blur-3xl" />

      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="text-center text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight"
      >
        A futuristic canvas for your app
        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-fuchsia-200">
          where motion meets clarity
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
        className="mt-6 max-w-2xl mx-auto text-center text-white/70"
      >
        Immerse your users in an adaptive, dark-themed hero that responds to their movement. Powered by real-time 3D and crafted with a sleek, neon aesthetic.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        className="mt-10 flex items-center justify-center gap-3"
      >
        <a
          href="#get-started"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 to-fuchsia-600 px-6 py-3 text-sm md:text-base font-medium shadow-[0_8px_30px_rgb(88,28,135,0.35)] hover:brightness-110 transition"
        >
          Launch Demo
          <ArrowRight size={18} className="opacity-90" />
        </a>
        <a
          href="#learn-more"
          className="pointer-events-auto inline-flex items-center gap-2 rounded-2xl bg-white/5 px-6 py-3 text-sm md:text-base text-white/90 border border-white/10 hover:bg-white/10 transition"
        >
          Learn More
        </a>
      </motion.div>

      {/* Floating card */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.45, ease: 'easeOut' }}
        className="mt-14 mx-auto w-full max-w-3xl rounded-3xl border border-white/10 bg-black/30 backdrop-blur-md p-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Feature title="Reactive 3D" desc="Mouse-aware Spline background for living depth." />
          <Feature title="Ultra-dark UI" desc="Neon highlights on a cinematic black canvas." />
          <Feature title="Production Ready" desc="Vite + React + Tailwind with motion out of box." />
        </div>
      </motion.div>
    </section>
  )
}

const Feature = ({ title, desc }) => (
  <div className="rounded-2xl bg-white/5 border border-white/10 p-4">
    <div className="text-sm font-semibold text-white">{title}</div>
    <div className="text-xs text-white/70 mt-1">{desc}</div>
  </div>
)

export default HeroContent

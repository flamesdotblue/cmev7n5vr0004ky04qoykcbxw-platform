import React from 'react'
import { Sparkles, Github } from 'lucide-react'

const Navbar = () => {
  return (
    <header className="pt-6 px-6 md:px-10 lg:px-16">
      <nav className="pointer-events-auto backdrop-blur-[2px] bg-black/10 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-600 flex items-center justify-center shadow-lg shadow-fuchsia-600/20">
            <Sparkles size={18} />
          </div>
          <span className="font-semibold tracking-tight">Nebula UI</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition pointer-events-auto">Features</a>
          <a href="#usage" className="hover:text-white transition pointer-events-auto">Docs</a>
          <a href="#pricing" className="hover:text-white transition pointer-events-auto">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 text-sm font-medium hover:bg-zinc-200 transition shadow-lg shadow-white/10"
          >
            Get Started
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="pointer-events-auto inline-flex items-center gap-2 rounded-xl bg-white/5 text-white px-3 py-2 text-sm hover:bg-white/10 transition border border-white/10"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar

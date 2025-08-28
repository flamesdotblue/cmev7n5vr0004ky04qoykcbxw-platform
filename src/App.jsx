import React from 'react'
import BackgroundSpline from './components/BackgroundSpline'
import Navbar from './components/Navbar'
import HeroContent from './components/HeroContent'
import FeatureBadges from './components/FeatureBadges'

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white relative overflow-hidden">
      <BackgroundSpline />

      <div className="relative z-10 pointer-events-none">
        <Navbar />
        <main className="px-6 md:px-10 lg:px-16">
          <HeroContent />
          <FeatureBadges />
        </main>
      </div>

      {/* Ambient gradient glows */}
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-500/10 blur-2xl" />
      </div>

      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
    </div>
  )
}

export default App

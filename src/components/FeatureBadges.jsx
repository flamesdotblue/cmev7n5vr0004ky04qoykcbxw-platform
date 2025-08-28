import React from 'react'

const badges = [
  { label: 'Framer Motion', color: 'from-pink-500 to-red-500' },
  { label: 'Tailwind CSS', color: 'from-sky-500 to-cyan-400' },
  { label: 'Spline 3D', color: 'from-indigo-500 to-fuchsia-500' },
  { label: 'Dark Mode', color: 'from-zinc-400 to-white' },
]

const FeatureBadges = () => {
  return (
    <div id="features" className="mt-6 md:mt-10 pb-12">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {badges.map((b) => (
          <span
            key={b.label}
            className={`pointer-events-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/80 hover:bg-white/10 transition`}
          >
            <span className={`h-2 w-2 rounded-full bg-gradient-to-r ${b.color}`} />
            {b.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default FeatureBadges

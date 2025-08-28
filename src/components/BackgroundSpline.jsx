import React from 'react'

// Fullscreen Spline iframe background with subtle blending
const BackgroundSpline = () => {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Spline scene: black droplet that breaks down and moves with mouse */}
      <iframe
        title="Spline Animated Droplet"
        src="https://my.spline.design/animatedshapeblend-hPWufzVyleqvxFebWTsx99DT/"
        className="h-full w-full"
        style={{ border: 'none', filter: 'saturate(1.1) contrast(1.05)' }}
        allow="autoplay; fullscreen"
      />

      {/* Grid overlay for futuristic feel */}
      <svg className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden="true">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml;utf8,\
        <svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 100\'>\
          <filter id=\'n\'>\
            <feTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'2\' stitchTiles=\'stitch\'/>\
            <feColorMatrix type=\'saturate\' values=\'0\'/>\
          </filter>\
          <rect width=\'100%\' height=\'100%\' filter=\'url(#n)\' opacity=\'0.6\'/>\
        </svg>\n")', backgroundSize: '200px 200px' }} />
    </div>
  )
}

export default BackgroundSpline

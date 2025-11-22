import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

      {/* Spline 3D */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft radial highlight */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_400px_at_70%_20%,rgba(59,130,246,0.2),transparent)]" />

      {/* Foreground content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-widest text-blue-300/80">Portfolio of Carl Jance “CJ” Mende</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Developer and technical generalist building practical, AI‑assisted solutions
            </h1>
            <p className="mt-6 text-lg text-blue-100/90">
              I design and ship useful tools: dashboards, automation, device control, and clean web interfaces. I bridge dev, systems, and creative work to get things working end to end.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-500 px-5 py-3 text-white font-semibold shadow hover:bg-blue-600 transition-colors">Start a project</a>
              <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white/10 px-5 py-3 text-white font-semibold ring-1 ring-white/20 hover:bg-white/15 transition-colors">See selected work</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

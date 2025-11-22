function Testimonials() {
  return (
    <section id="testimonials" className="relative w-full bg-slate-950 text-blue-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Testimonials (placeholder)</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <blockquote className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-blue-100/90">“CJ explains tech in plain language and ships what he promises.”</p>
            <footer className="mt-3 text-sm text-blue-300/80">Placeholder name</footer>
          </blockquote>
          <blockquote className="rounded-xl border border-white/10 bg-white/5 p-6">
            <p className="text-blue-100/90">“Reliable, detail‑oriented, and easy to work with.”</p>
            <footer className="mt-3 text-sm text-blue-300/80">Placeholder name</footer>
          </blockquote>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

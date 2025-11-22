function Contact() {
  return (
    <section id="contact" className="relative w-full bg-slate-950 text-blue-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-8 md:p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Let’s work</h2>
          <p className="mt-4 text-lg text-blue-100/90">Have a small system, dashboard, or site in mind? Send a short brief and timeline. I’ll reply with a clear plan.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <a href="mailto:hello@example.com" className="rounded-lg bg-blue-500 px-5 py-3 text-center font-semibold text-white hover:bg-blue-600 transition-colors">Email</a>
            <a href="#" className="rounded-lg bg-white/10 px-5 py-3 text-center font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors">LinkedIn</a>
            <a href="#" className="rounded-lg bg-white/10 px-5 py-3 text-center font-semibold text-white ring-1 ring-white/20 hover:bg-white/15 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

function Project({ title, problem, build, impact }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <div className="mt-3 space-y-2 text-blue-100/90">
        <p><span className="font-semibold text-white">Problem:</span> {problem}</p>
        <p><span className="font-semibold text-white">What I built:</span> {build}</p>
        <p><span className="font-semibold text-white">Outcome:</span> {impact}</p>
      </div>
    </div>
  )
}

function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 text-blue-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Selected projects</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Project
            title="MLM net‑profit dashboard"
            problem="Leaders needed a clear view of net profit trends without manual spreadsheets."
            build="A simple dashboard to track figures with quick filters and clean visuals."
            impact="Faster reviews, fewer manual steps, and clearer team updates."
          />
          <Project
            title="Electrolytic / ultrasonic cleaner (Arduino)"
            problem="Wanted safe, repeatable cleaning cycles for small parts."
            build="Arduino‑based control with timed cycles and basic safety checks."
            impact="Consistent results and easier handoff to non‑technical users."
          />
          <Project
            title="CCTV and Ubiquiti network layouts"
            problem="Sites needed reliable coverage and tidy wiring plans."
            build="Placement plans, topology maps, and setup guidance for APs and cameras."
            impact="Smoother installs and faster troubleshooting later on."
          />
          <Project
            title="Teaching MySQL with XAMPP"
            problem="Beginners needed hands‑on database practice without friction."
            build="Step‑by‑step activities for CRUD, joins, and schema basics using XAMPP."
            impact="Students understood fundamentals and built working queries quickly."
          />
          <Project
            title="CLSU Maestro‑Singers arrangements"
            problem="Choir needed singable, clear arrangements for events."
            build="Choral charts with practical voicings and rehearsal tracks."
            impact="Tighter rehearsals and reliable performance outcomes."
          />
          <Project 
            title="Data and reports work (Accredo)"
            problem="Teams needed accurate information pulled and formatted on time."
            build="Organized data, cleaned entries, and produced reports while protecting privacy."
            impact="Reduced rework and clearer decisions during daily ops."
          />
          <Project
            title="General web components"
            problem="Repeating UI patterns slowed down new builds."
            build="Reusable blocks for forms, tables, and content sections."
            impact="Faster shipping and consistent quality across pages."
          />
          <Project
            title="Internal tools and scripts"
            problem="Routine tasks took too long and were error‑prone."
            build="Small scripts for automation, simple monitoring, and admin shortcuts."
            impact="Saved time and made daily work steadier."
          />
        </div>
      </div>
    </section>
  )
}

export default Projects

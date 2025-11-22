function SkillGroup({ title, items, desc }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/5 p-6">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm text-blue-100/80">{desc}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {items.map((i) => (
          <li key={i} className="rounded-lg bg-slate-900/70 px-3 py-1 text-sm text-blue-100 ring-1 ring-white/10">{i}</li>
        ))}
      </ul>
    </div>
  )
}

function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 text-blue-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <SkillGroup
            title="Development & Tech"
            desc="Web builds, dashboards, small systems, automation, and scripting."
            items={[
              'Web development',
              'Dashboards',
              'CMS/HRMS modules',
              'Automation scripts',
              'Arduino control',
              'MySQL basics',
              'XAMPP',
            ]}
          />
          <SkillGroup
            title="Systems & Networking"
            desc="Layout planning, topology mapping, and ground support."
            items={[
              'Ubiquiti AP/Station setup',
              'CCTV layouts',
              'Network topology mapping',
              'NOC operations awareness',
              'General tech support',
            ]}
          />
          <SkillGroup
            title="Creative & Audio"
            desc="Music, voice work, and clean edits built in real tools."
            items={[
              'Music composition',
              'Choral arrangement',
              'Audio production (FL Studio)',
              'Singing & narration',
            ]}
          />
          <SkillGroup
            title="Business & Administration"
            desc="Reliable support for daily operations and reporting."
            items={[
              'Data entry',
              'Transcription',
              'Proofreading',
              'Captioning',
              'Documentation',
            ]}
          />
          <SkillGroup
            title="Tools & Platforms"
            desc="The stack I reach for to move fast and keep it stable."
            items={[
              'MS Word',
              'MySQL',
              'XAMPP',
              'Ubiquiti',
              'Arduino',
              'FL Studio',
            ]}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills

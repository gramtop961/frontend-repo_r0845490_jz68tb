function Item({ role, desc }) {
  return (
    <li className="rounded-xl border border-white/10 bg-white/5 p-5">
      <p className="text-white font-semibold">{role}</p>
      <p className="mt-2 text-blue-100/90 text-sm">{desc}</p>
    </li>
  )
}

function Experience() {
  return (
    <section id="experience" className="relative w-full bg-slate-950 text-blue-100">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        <ul className="mt-8 grid gap-4">
          <Item
            role="MotivIT • L1 Tech Support / NOC Analyst"
            desc="Handled L1 tickets, basic network checks, and clear handoffs to higher tiers. Helped map simple topologies and kept comms tight."
          />
          <Item
            role="Accredo • Patient Care Advocate"
            desc="Processed requests with accuracy and empathy. Pulled and cleaned data for reports while keeping info secure."
          />
          <Item
            role="Freelance development"
            desc="Built small sites, dashboards, and internal tools. Mixed dev, systems, and admin work to deliver working results."
          />
          <Item
            role="Creative music work"
            desc="Wrote and arranged pieces, recorded vocals, and produced clean tracks for choirs and small projects."
          />
        </ul>
      </div>
    </section>
  )
}

export default Experience

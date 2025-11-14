export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">About Me</h2>
            <p className="mt-4 text-zinc-600 leading-relaxed">
              I’m a full‑stack developer with a love for delightful, performant interfaces. My focus is on crafting accessible, user‑centered products that feel fast and fun.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { k: 'Experience', v: '6+ years' },
                { k: 'Projects', v: '40+' },
                { k: 'Stack', v: 'TS, React, Next.js, Node' },
                { k: 'Location', v: 'Remote' },
              ].map((item) => (
                <div key={item.k} className="rounded-xl border border-zinc-200 p-4">
                  <p className="text-xs text-zinc-500">{item.k}</p>
                  <p className="mt-1 font-semibold text-zinc-900">{item.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-indigo-100 via-violet-100 to-fuchsia-100 border border-zinc-200" />
        </div>
      </div>
    </section>
  );
}

export function Services() {
  const items = [
    { title: 'Web Apps', desc: 'High‑performance apps built with modern tech.' },
    { title: 'Design Systems', desc: 'Reusable, accessible UI systems and components.' },
    { title: 'Animations', desc: 'Micro‑interactions and 3D that bring products to life.' },
  ];
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">What I Do</h2>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-zinc-200 p-6 bg-white shadow-sm">
              <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const projects = [
    { title: 'SaaS Dashboard', tag: 'Product' },
    { title: 'E‑commerce', tag: 'Platform' },
    { title: 'Fintech Mobile', tag: 'App' },
    { title: '3D Landing', tag: 'Website' },
  ];
  return (
    <section id="work" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Selected Work</h2>
          <a href="#" className="text-sm text-indigo-600 hover:underline">View all</a>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-zinc-200 overflow-hidden bg-white shadow-sm">
              <div className="aspect-[4/3] bg-gradient-to-br from-zinc-100 to-zinc-200" />
              <div className="p-4">
                <p className="text-xs text-zinc-500">{p.tag}</p>
                <h3 className="mt-1 font-semibold text-zinc-900 group-hover:text-indigo-600 transition-colors">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-zinc-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 p-8 bg-white">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">Let’s build together</h2>
            <p className="mt-3 text-zinc-600">Tell me about your project and timeline. I’ll get back within 24 hours.</p>
            <form className="mt-8 grid gap-4">
              <input placeholder="Your name" className="w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <input placeholder="Email" type="email" className="w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <textarea placeholder="What are you building?" rows={5} className="w-full rounded-xl border border-zinc-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
              <button className="inline-flex items-center justify-center rounded-xl bg-indigo-600 text-white px-5 py-3 hover:bg-indigo-700 transition">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

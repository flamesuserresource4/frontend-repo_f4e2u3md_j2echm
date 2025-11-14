import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for freelance
            </span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_6px_24px_rgba(0,0,0,0.35)]">
              Crafting delightful digital products
            </h1>
            <p className="mt-6 text-white/80 text-base sm:text-lg leading-relaxed max-w-xl">
              I’m a product-focused developer and designer building modern, immersive web experiences. I love shipping fast and iterating with real users.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-xl bg-black/80 text-white px-5 py-3 hover:bg-black transition shadow-lg">
                View Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white/80 text-zinc-900 px-5 py-3 hover:bg-white transition shadow-lg">
                Contact Me
              </a>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(10,10,20,0.2)] via-[rgba(10,10,20,0.2)] to-[rgba(10,10,20,0.85)]" />
      </div>
    </section>
  );
}

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-end overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-landscape.jpg"
          alt="Magyar természeti táj — dombos vidék és erdei ösvény"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Layered cinematic overlay */}
        <div className="absolute inset-0 bg-ink/50" />
        <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
      </div>

      {/* Decorative top text ticker */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden pt-[72px] pointer-events-none">
        <div className="flex gap-8 text-white/20 font-mono text-[10px] tracking-[0.3em] uppercase py-3 border-b border-white/10 px-6 max-w-7xl mx-auto">
          <span>Természet</span>
          <span>···</span>
          <span>Kaland</span>
          <span>···</span>
          <span>Felfedezés</span>
          <span>···</span>
          <span>Erdei ösvények</span>
          <span>···</span>
          <span>Dombvidék</span>
          <span>···</span>
          <span>Éjszakázás a természetben</span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 md:pb-28">
        <div className="flex justify-end">
          <div className="max-w-xl w-full">
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-amber mb-6">
              Szerzői kalandtúrák · Magyarország
            </p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] text-balance mb-8">
              Ahol az út maga a cél
            </h1>
            <p className="font-mono text-sm md:text-base text-white/65 leading-relaxed mb-10">
              Nem a sebességért, nem a rekordokért — hanem az érzésért. Egyedi természetjáró utakon vezetünk át Magyarország rejtekaján, ahol minden fordulat egy új fejezet a saját történetedben.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/katalogus"
                className="font-mono text-sm tracking-wide bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/80 transition-colors duration-300 text-center"
              >
                Fedezd fel a túrákat
              </Link>
              <Link
                href="#tortenet"
                className="font-mono text-sm tracking-wide text-white/80 border border-white/30 px-8 py-4 hover:border-white/60 hover:text-white transition-colors duration-300 text-center"
              >
                A mi történetünk
              </Link>
            </div>

            {/* Stats strip */}
            <div className="mt-16 pt-8 border-t border-white/15 grid grid-cols-3 gap-8">
              {[
                { num: '24', label: 'egyedi útvonal' },
                { num: '8', label: 'régiótípus' },
                { num: '100%', label: 'szerzői túra' },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-serif text-3xl font-bold text-white mb-1">{s.num}</p>
                  <p className="font-mono text-[11px] uppercase tracking-widest text-white/45">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-white/30">
        <div className="w-px h-12 bg-white/20 animate-pulse" />
        <p className="font-mono text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center mt-4">Görgess</p>
      </div>
    </section>
  )
}

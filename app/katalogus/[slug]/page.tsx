import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, Mountain, Users, Check, X } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import { tours } from '@/lib/tours-data'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) return {}
  return {
    title: `${tour.title} - Magyar Match Tours`,
    description: tour.shortDescription,
  }
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params
  const tour = tours.find((t) => t.slug === slug)
  if (!tour) notFound()

  return (
    <>
      <Navigation />
      <main>
        {/* Hero */}
        <section className="relative min-h-[65vh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={tour.image}
              alt={tour.imageAlt}
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-ink/50" />
            <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-ink/95 via-ink/40 to-transparent" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
            <Link
              href="/katalogus"
              className="inline-flex items-center gap-2 font-mono text-[11px] tracking-widest uppercase text-white/50 hover:text-white transition-colors mb-8"
            >
              ← Vissza a katalógusba
            </Link>
            <div className="flex flex-wrap gap-3 mb-5">
              <span className="font-mono text-[10px] tracking-widest uppercase bg-primary text-primary-foreground px-3 py-1">
                {tour.type}
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase bg-white/10 text-white/70 px-3 py-1">
                {tour.difficulty}
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight text-balance max-w-3xl mb-4">
              {tour.title}
            </h1>
            <p className="font-mono text-sm text-white/60 leading-relaxed max-w-2xl">
              {tour.shortDescription}
            </p>
          </div>
        </section>

        {/* Quick meta bar */}
        <section className="bg-ink border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-5 flex flex-wrap gap-8">
            {[
              { icon: Clock, label: 'Időtartam', value: tour.duration },
              { icon: Mountain, label: 'Nehézség', value: tour.difficulty },
              { icon: Calendar, label: 'Következő indulás', value: tour.nextDates[0] },
              { icon: Users, label: 'Max. létszám', value: tour.highlights.find((h) => h.includes('fő')) ?? 'Kis csoport' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon size={16} className="text-amber shrink-0" />
                <div>
                  <p className="font-mono text-[10px] tracking-widest uppercase text-white/40">{label}</p>
                  <p className="font-mono text-xs text-white/80">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Main content */}
        <section className="bg-background py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left: story + phases */}
            <div className="lg:col-span-2 flex flex-col gap-14">

              {/* Full description */}
              <div>
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-6">A túra leírása</p>
                <div className="flex flex-col gap-5">
                  {tour.fullDescription.map((para, i) => (
                    <p key={i} className="font-mono text-sm leading-relaxed text-muted-foreground">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-6">Kiemelések</p>
                <ul className="flex flex-col gap-3">
                  {tour.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <Check size={14} className="text-primary mt-0.5 shrink-0" />
                      <span className="font-mono text-sm text-foreground/80">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Before / During / After */}
              <div>
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-6">Az érzelmi ív</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
                  {[
                    { phase: 'Előtte', phaseEn: 'Before', text: tour.beforeText, bg: 'bg-background' },
                    { phase: 'Közben', phaseEn: 'During', text: tour.duringText, bg: 'bg-muted' },
                    { phase: 'Utána', phaseEn: 'After', text: tour.afterText, bg: 'bg-background' },
                  ].map((blk) => (
                    <div key={blk.phase} className={`${blk.bg} p-7 flex flex-col gap-3`}>
                      <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-stone">{blk.phaseEn}</p>
                      <p className="font-serif text-base font-bold text-ink">{blk.phase}</p>
                      <p className="font-mono text-xs leading-relaxed text-muted-foreground">{blk.text}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Photo gallery */}
              <div>
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-6">Útvonal képek</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {tour.detailImages.map((img) => (
                    <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: sidebar */}
            <div className="flex flex-col gap-8">

              {/* Dates */}
              <div className="border border-border p-7">
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-5">Következő indulások</p>
                <ul className="flex flex-col gap-3">
                  {tour.nextDates.map((d) => (
                    <li key={d} className="flex items-center gap-3">
                      <Calendar size={13} className="text-stone shrink-0" />
                      <span className="font-mono text-sm text-foreground/80">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Included / Not included */}
              <div className="border border-border p-7">
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-5">Ami benne van</p>
                <ul className="flex flex-col gap-2.5 mb-6">
                  {tour.included.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check size={13} className="text-primary mt-0.5 shrink-0" />
                      <span className="font-mono text-xs text-foreground/75">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-stone mb-4">Ami nincs benne</p>
                <ul className="flex flex-col gap-2.5">
                  {tour.notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <X size={13} className="text-muted-foreground mt-0.5 shrink-0" />
                      <span className="font-mono text-xs text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-forest p-7 flex flex-col gap-4">
                <p className="font-serif text-xl font-bold text-white leading-snug">
                  Érdekel ez az útvonal?
                </p>
                <p className="font-mono text-xs text-white/60 leading-relaxed">
                  Vedd fel velünk a kapcsolatot - egyeztetünk az időpontokról és a részletekről.
                </p>
                <Link
                  href="/kapcsolat"
                  className="font-mono text-sm tracking-wide bg-amber text-ink px-6 py-3 text-center hover:opacity-90 transition-opacity"
                >
                  Részvételi igény leadása
                </Link>
              </div>

              {/* Back link */}
              <Link
                href="/katalogus"
                className="font-mono text-xs tracking-wide text-muted-foreground hover:text-amber transition-colors border-b border-border pb-1 self-start"
              >
                ← Vissza a katalógusba
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

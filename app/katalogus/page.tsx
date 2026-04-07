import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'
import { tours } from '@/lib/tours-data'

export const metadata: Metadata = {
  title: 'Túrakatalógus — Magyar Match Tours',
  description:
    'Fedezd fel szerzői természetjáró kalandtúráinkat: kerékpáros expedíciók, gyalogos erdei utak, völgyátjárók és folyómenti vándorlások Magyarországon.',
}

const difficultyOrder = ['Könnyű', 'Közepes', 'Haladó', 'Nehéz']

export default function CatalogPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Page header */}
        <section className="relative pt-36 pb-20 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/valley-panorama.jpg"
              alt="Völgypanoráma — természetjáró kalandtúrák Magyarországon"
              fill
              priority
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/70 to-ink" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-amber mb-4">
              Szerzői útvonalak
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight text-balance max-w-2xl mb-6">
              Túrakatalógus
            </h1>
            <p className="font-mono text-sm text-white/60 leading-relaxed max-w-xl">
              Minden túra egyedi — nem ismételt, nem sablon. Válassz az útvonalak között, és találd meg azt, amelyik szól hozzád.
            </p>
          </div>
        </section>

        {/* Tours grid */}
        <section className="bg-background py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            {/* Filter tags (static, visual only) */}
            <div className="flex flex-wrap gap-3 mb-14">
              <span className="font-mono text-[11px] tracking-widest uppercase text-stone self-center mr-2">
                Nehézség:
              </span>
              {difficultyOrder.map((d) => (
                <span
                  key={d}
                  className="font-mono text-[11px] tracking-wide uppercase border border-border px-3 py-1.5 text-muted-foreground"
                >
                  {d}
                </span>
              ))}
              <span className="font-mono text-[11px] tracking-widest uppercase text-stone self-center ml-4 mr-2">
                Típus:
              </span>
              {['Gyalogos', 'Kerékpáros', 'Vegyes terep'].map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] tracking-wide uppercase border border-border px-3 py-1.5 text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Full tours list */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {tours.map((tour) => (
                <Link
                  key={tour.slug}
                  href={`/katalogus/${tour.slug}`}
                  className="group bg-background flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={tour.image}
                      alt={tour.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="font-mono text-[10px] tracking-widest uppercase bg-primary text-primary-foreground px-2 py-1">
                        {tour.type}
                      </span>
                      <span className="font-mono text-[10px] tracking-widest uppercase bg-ink/60 text-white/80 px-2 py-1">
                        {tour.difficulty}
                      </span>
                    </div>
                  </div>
                  <div className="p-7 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-stone">
                      <span>{tour.duration}</span>
                    </div>
                    <h2 className="font-serif text-xl font-bold text-ink leading-snug group-hover:text-primary transition-colors">
                      {tour.title}
                    </h2>
                    <p className="font-mono text-xs leading-relaxed text-muted-foreground flex-1">
                      {tour.shortDescription}
                    </p>
                    <div className="flex items-center gap-2 mt-2 font-mono text-xs text-amber">
                      <span>Részletek és időpontok</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA strip */}
        <section className="bg-forest py-16">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-white/50 mb-2">
                Nem találtad a megfelelőt?
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white text-balance">
                Írj nekünk — alkotunk egyet neked.
              </h2>
            </div>
            <Link
              href="/kapcsolat"
              className="font-mono text-sm tracking-wide bg-amber text-ink px-8 py-4 hover:opacity-90 transition-opacity shrink-0"
            >
              Kapcsolatfelvétel
            </Link>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

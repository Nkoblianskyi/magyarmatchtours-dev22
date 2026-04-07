import Link from 'next/link'
import Image from 'next/image'
import { tours } from '@/lib/tours-data'

export default function ToursPreviewSection() {
  const featured = tours.slice(0, 3)

  return (
    <section className="bg-muted py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-4">Kiemelt útvonalak</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight text-balance max-w-lg">
              Válassz egy utat, amely szól hozzád
            </h2>
          </div>
          <Link
            href="/katalogus"
            className="font-mono text-sm tracking-wide text-foreground/70 border-b border-foreground/30 pb-0.5 hover:text-amber hover:border-amber transition-colors shrink-0"
          >
            Az összes túra megtekintése →
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {featured.map((tour) => (
            <Link
              key={tour.slug}
              href={`/katalogus/${tour.slug}`}
              className="group bg-background flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink/20 group-hover:bg-ink/10 transition-colors duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="font-mono text-[10px] tracking-widest uppercase bg-primary text-primary-foreground px-2 py-1">
                    {tour.type}
                  </span>
                </div>
              </div>
              <div className="p-7 flex flex-col gap-3 flex-1">
                <div className="flex items-center gap-4 text-[10px] font-mono tracking-widest uppercase text-stone">
                  <span>{tour.duration}</span>
                  <span className="text-border">·</span>
                  <span>{tour.difficulty}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-ink leading-snug group-hover:text-primary transition-colors">
                  {tour.title}
                </h3>
                <p className="font-mono text-xs leading-relaxed text-muted-foreground flex-1">
                  {tour.shortDescription}
                </p>
                <div className="flex items-center gap-2 mt-2 font-mono text-xs text-amber">
                  <span>Részletek</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

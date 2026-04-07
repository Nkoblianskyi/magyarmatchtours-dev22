import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'

export default function NotFound() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-background flex items-center justify-center px-6">
        <div className="text-center max-w-lg">
          <p className="font-serif text-[120px] md:text-[180px] font-bold text-muted leading-none select-none">
            404
          </p>
          <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-amber mb-4 -mt-4">
            Az oldal nem található
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-5 text-balance">
            Úgy tűnik, ez az ösvény nem létezik
          </h1>
          <p className="font-mono text-sm text-muted-foreground leading-relaxed mb-8">
            A keresett oldal nem található, vagy a link érvénytelen. Próbálj visszatérni a főoldalra, vagy böngészd a túrakatalógust.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="font-mono text-sm tracking-wide bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/80 transition-colors"
            >
              Főoldal
            </Link>
            <Link
              href="/katalogus"
              className="font-mono text-sm tracking-wide border border-border text-foreground/70 px-8 py-4 hover:border-amber hover:text-amber transition-colors"
            >
              Túrakatalógus
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

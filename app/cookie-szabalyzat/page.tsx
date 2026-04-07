import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Cookie-szabályzat - Magyar Match Tours',
  description: 'A Magyar Match Tours / K.C. NTOMATA LIMITED cookie (süti) szabályzata.',
}

const cookieTypes = [
  {
    name: 'Elengedhetetlen sütik',
    required: true,
    retention: 'A munkamenet végéig',
    purpose: 'A weboldal alapvető működéséhez szükséges sütik, például a süti-hozzájárulás tárolása. Ezek nélkül a weboldal nem működik megfelelően.',
    examples: 'cookie-consent',
  },
  {
    name: 'Analitikai sütik',
    required: false,
    retention: 'Legfeljebb 26 hónap',
    purpose: 'A weboldal látogatottságának és használati szokásainak mérésére szolgálnak. Segítenek megérteni, hogyan használják látogatóink az oldalt, hogy javíthassuk a felhasználói élményt.',
    examples: '_ga, _gid (Google Analytics - csak hozzájárulással)',
  },
  {
    name: 'Funkcionális sütik',
    required: false,
    retention: 'Legfeljebb 12 hónap',
    purpose: 'Megjegyzik a látogató beállításait (pl. nyelv), hogy a következő látogatáskor is ugyanazokat az opciókat kínálja a weboldal.',
    examples: 'user-preferences',
  },
]

export default function CookiePolicyPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-36 pb-14 bg-ink">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-amber mb-4">Jogi dokumentum</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Cookie-szabályzat
            </h1>
            <p className="font-mono text-xs text-white/40">Utolsó frissítés: 2026.</p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col gap-12 font-mono text-sm text-muted-foreground leading-relaxed">

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">1. Mi az a cookie (süti)?</h2>
                <p>
                  A sütik kisméretű szövegfájlok, amelyeket a weboldal a felhasználó eszközén (számítógép, telefon, tablet) tárol a böngészés során. A sütik segítségével a weboldal &ldquo;emlékezhet&rdquo; a látogató beállításaira és viselkedésére.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">2. Milyen sütiket használunk</h2>
                <div className="flex flex-col gap-6">
                  {cookieTypes.map((ct) => (
                    <div key={ct.name} className="border border-border p-6 flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-4 flex-wrap">
                        <h3 className="font-serif text-base font-bold text-ink">{ct.name}</h3>
                        <span
                          className={`font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 ${ct.required
                              ? 'bg-primary/15 text-primary'
                              : 'bg-muted text-muted-foreground border border-border'
                            }`}
                        >
                          {ct.required ? 'Kötelező' : 'Opcionális'}
                        </span>
                      </div>
                      <p className="text-xs leading-relaxed">{ct.purpose}</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs pt-2 border-t border-border">
                        <p>
                          <span className="text-stone uppercase tracking-widest text-[10px]">Megőrzési idő: </span>
                          {ct.retention}
                        </p>
                        <p>
                          <span className="text-stone uppercase tracking-widest text-[10px]">Példák: </span>
                          <code className="bg-muted px-1">{ct.examples}</code>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">3. Hozzájárulás és visszavonás</h2>
                <p>
                  A weboldal első látogatásakor egy cookie-banneren keresztül tájékoztatunk a sütik használatáról, és lehetőséget biztosítunk a hozzájárulás megadására vagy elutasítására. Az elengedhetetlen sütik hozzájárulás nélkül is aktívak, mivel ezek nélkül a weboldal nem üzemel.
                </p>
                <p>
                  Hozzájárulásodat bármikor visszavonhatod a böngésző süti-beállításainak módosításával, vagy az{' '}
                  <a href="mailto:info@magyarmatchtours.com" className="text-amber underline">info@magyarmatchtours.com</a>{' '}
                  e-mail-cím megírásával.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">4. Süti-beállítások a böngészőben</h2>
                <p>
                  A legtöbb böngésző lehetővé teszi a sütik kezelését a beállítások menüjében. A sütik letiltása esetén a weboldal egyes funkciói nem biztos, hogy megfelelően működnek.
                </p>
                <ul className="list-disc list-inside flex flex-col gap-1.5 pl-2">
                  <li>Google Chrome: Beállítások → Adatvédelem és biztonság → Sütik</li>
                  <li>Mozilla Firefox: Beállítások → Adatvédelem és biztonság</li>
                  <li>Safari: Beállítások → Adatvédelem</li>
                  <li>Microsoft Edge: Beállítások → Sütik és webhelyadatok</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">5. Kapcsolat</h2>
                <p>
                  A sütik használatával kapcsolatos kérdéseiddet az{' '}
                  <a href="mailto:info@magyarmatchtours.com" className="text-amber underline hover:text-foreground transition-colors">
                    info@magyarmatchtours.com
                  </a>{' '}
                  e-mail-cíkre küldheted, vagy megtekintheted{' '}
                  <Link href="/adatvedelmi-iranyelvek" className="text-amber underline hover:text-foreground transition-colors">
                    Adatvédelmi irányelveinket
                  </Link>
                  .
                </p>
                <div className="border-t border-border pt-8 flex gap-6">
                  <Link href="/adatvedelmi-iranyelvek" className="font-mono text-xs text-amber hover:text-foreground transition-colors">
                    Adatvédelmi irányelvek →
                  </Link>
                  <Link href="/kapcsolat" className="font-mono text-xs text-muted-foreground hover:text-amber transition-colors">
                    Kapcsolatfelvétel →
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />
    </>
  )
}

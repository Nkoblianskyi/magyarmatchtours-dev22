import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Rólunk — Magyar Match Tours',
  description:
    'Megismerjük, kik vagyunk és miért csináljuk. Szerzői természetjáró kalandtúrák Magyarországon — az ösvény nem ér véget a célnál.',
}

const values = [
  {
    num: '01',
    title: 'Szerzőiség',
    body: 'Minden útvonalunkat saját magunk tervezzük és járjuk be. Nincs sablon, nincs tömegturizmus — csak élő terep és mély terepismereten alapuló alkotás.',
  },
  {
    num: '02',
    title: 'Jelenlét',
    body: 'Nem az a célunk, hogy a legtöbb kilométert teljesítsd, hanem hogy valóban ott legyél — a természetben, önmagadban, a pillanatban.',
  },
  {
    num: '03',
    title: 'Kis csoportok',
    body: 'Szándékosan tartjuk alacsonyan a csoportlétszámot. A természet nem tömeges élmény — és azt hisszük, a te utazásod sem az.',
  },
  {
    num: '04',
    title: 'Az út mint élmény',
    body: 'A cél nem a végpont, hanem maga az út. Minden fordulat, minden gerinc, minden hajnali köd és tábortűz — ezek alkotják az utazást.',
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Hero header */}
        <section className="relative pt-36 pb-24 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-landscape.jpg"
              alt="Dombos magyar táj — a természetjáró kalandtúrák világa"
              fill
              priority
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-amber mb-4">
              Kik vagyunk
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight text-balance max-w-2xl mb-6">
              Rólunk
            </h1>
            <p className="font-mono text-sm text-white/55 leading-relaxed max-w-xl">
              Az ösvény nem ér véget a célnál — ott kezdődik. Ez az a mondat, amely leírja, miért csináljuk, amit csinálunk.
            </p>
          </div>
        </section>

        {/* Origin story */}
        <section className="bg-background py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-7">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber">Hogyan kezdődött</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight text-balance">
                Egy egyszerű kérdésből nőtt ki minden
              </h2>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Évekkel ezelőtt, egy hosszabb erdei gyaloglás közben tettük fel magunknak a kérdést: miért nincs olyan túraszolgáltatás, amely valóban az élményre épít — nem a turistautakra, nem az ismert helyszínekre, hanem a valódi természeti terepekre?
              </p>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                A Magyar Match Tours ebből az igényből született. Nem egy sportteljesítményt kínálunk, nem látványosságokat — hanem valódi, szerzői utazásokat, amelyek a természetjárás lényegéről szólnak.
              </p>
              <p className="font-mono text-sm leading-relaxed text-muted-foreground">
                Minden útvonalunkat magunk tervezzük, magunk járjuk be újra és újra, és minden alkalommal valami újat fedezünk fel. Mert a természet sem ismétli önmagát soha teljesen.
              </p>
              <div className="border-l-2 border-amber pl-5 mt-2">
                <p className="font-serif text-lg italic text-ink leading-relaxed">
                  &ldquo;Az ösvény nem ér véget a célnál — ott kezdődik.&rdquo;
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/trail-forest.jpg"
                alt="Erdei ösvény — a természetjáró utazás kezdete"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-muted py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-4">Amiben hiszünk</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight text-balance max-w-xl">
                Az értékeink, amelyek minden útvonalt alakítanak
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
              {values.map((v) => (
                <div key={v.num} className="bg-muted p-10 flex flex-col gap-4">
                  <span className="font-serif text-5xl font-bold text-muted-foreground/40">{v.num}</span>
                  <h3 className="font-serif text-xl font-bold text-ink">{v.title}</h3>
                  <p className="font-mono text-sm leading-relaxed text-muted-foreground">{v.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual break */}
        <section className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src="/images/mountain-dawn.jpg"
            alt="Hajnali ködfelhő a völgy felett — természetjáró hangulat"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-ink/50 flex items-center justify-center">
            <p className="font-serif text-2xl md:text-4xl font-bold text-white text-center text-balance max-w-2xl px-6 leading-snug">
              &ldquo;A legnehezebb nap a legjobb történet forrása.&rdquo;
            </p>
          </div>
        </section>

        {/* Company info */}
        <section className="bg-background py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-6">A szervezetről</p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-ink mb-8 leading-tight">
                  Ki áll a Magyar Match Tours mögött
                </h2>
                <div className="flex flex-col gap-4 font-mono text-sm text-muted-foreground leading-relaxed">
                  <p>
                    A Magyar Match Tours a <strong className="text-foreground">K.C. NTOMATA LIMITED</strong> vállalat által működtetett természetjáró kalandtúra-program, amelynek célja egyedi, szerzői természetjáró élmények biztosítása Magyarország tájain.
                  </p>
                  <div className="border border-border p-6 font-mono text-xs text-muted-foreground leading-relaxed mt-2">
                    <p className="font-bold text-foreground mb-3 text-sm">K.C. NTOMATA LIMITED</p>
                    <p>Stylianou Lena</p>
                    <p>24 Christiana Court, Flat/Office 202</p>
                    <p>Strovolos, 2019 Nicosia</p>
                    <p>Cyprus</p>
                    <p className="mt-3 text-amber">magyarmatchtours.com</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-2">Kapcsolat</p>
                <p className="font-mono text-sm text-muted-foreground leading-relaxed">
                  Kérdésed van, vagy egyedi csoportos túrát tervezel? Látogass el a kapcsolatfelvételi oldalra — örömmel válaszolunk minden megkeresésre.
                </p>
                <Link
                  href="/kapcsolat"
                  className="font-mono text-sm tracking-wide bg-primary text-primary-foreground px-8 py-4 hover:bg-primary/80 transition-colors self-start text-center"
                >
                  Lépj kapcsolatba velünk
                </Link>
                <Link
                  href="/katalogus"
                  className="font-mono text-sm tracking-wide text-foreground/70 border border-border px-8 py-4 hover:border-amber hover:text-amber transition-colors self-start text-center"
                >
                  Böngéssz a túrák között
                </Link>
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

import type { Metadata } from 'next'
import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

export const metadata: Metadata = {
  title: 'Adatvédelmi irányelvek - Magyar Match Tours',
  description: 'A Magyar Match Tours / K.C. NTOMATA LIMITED adatvédelmi irányelvei.',
}

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="pt-36 pb-14 bg-ink">
          <div className="max-w-4xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-amber mb-4">Jogi dokumentum</p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white leading-tight mb-4">
              Adatvédelmi irányelvek
            </h1>
            <p className="font-mono text-xs text-white/40">Utolsó frissítés: 2026.</p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex flex-col gap-12 font-mono text-sm text-muted-foreground leading-relaxed">

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">1. Az adatkezelő</h2>
                <p>
                  Az adatkezelő a <strong className="text-foreground">K.C. NTOMATA LIMITED</strong> (továbbiakban: &ldquo;Társaság&rdquo;, &ldquo;mi&rdquo;), amelynek székhelye:
                </p>
                <div className="border-l-4 border-amber pl-5 py-1 text-foreground/70">
                  <p>Stylianou Lena</p>
                  <p>24 Christiana Court, Flat/Office 202</p>
                  <p>Strovolos, 2019 Nicosia, Cyprus</p>
                  <p className="mt-2">E-mail: info@magyarmatchtours.com</p>
                  <p>Weboldal: magyarmatchtours.com</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">2. Milyen adatokat gyűjtünk</h2>
                <p>Weboldalunk használata során az alábbi személyes adatokat gyűjthetjük:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 pl-2">
                  <li>Kapcsolatfelvételi adatok: teljes név, e-mail cím</li>
                  <li>Az üzenet tartalma, amelyet a kapcsolatfelvételi űrlapon keresztül küldesz</li>
                  <li>Technikai adatok: IP-cím, böngésző típusa, látogatás dátuma és ideje (analitikai sütik révén)</li>
                  <li>Süti-azonosítók (részletesen a Cookie-szabályzatban)</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">3. Az adatkezelés célja és jogalapja</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs border-collapse border border-border">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-4 py-2 text-left text-foreground">Cél</th>
                        <th className="border border-border px-4 py-2 text-left text-foreground">Jogalap (GDPR 6. cikk)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Kapcsolatfelvételi üzenetek kezelése', 'Szerződés teljesítése / Jogos érdek'],
                        ['Weboldal-analitika és teljesítményjavítás', 'Hozzájárulás'],
                        ['Süti-hozzájárulás kezelése', 'Jogi kötelezettség teljesítése'],
                        ['Biztonság és visszaélések megelőzése', 'Jogos érdek'],
                      ].map(([cel, jogalap]) => (
                        <tr key={cel}>
                          <td className="border border-border px-4 py-2">{cel}</td>
                          <td className="border border-border px-4 py-2">{jogalap}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">4. Adatmegőrzési idő</h2>
                <p>
                  A kapcsolatfelvételi adatokat a megkeresés lezárását követő legfeljebb <strong className="text-foreground">2 évig</strong> őrizzük meg. Analitikai adatokat legfeljebb <strong className="text-foreground">26 hónapig</strong> tárolunk. A hozzájárulás visszavonása esetén az érintett adatokat haladéktalanul töröljük.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">5. Adattovábbítás</h2>
                <p>
                  Személyes adataidat harmadik félnek nem adjuk el és nem adjuk bérbe. Adataid kizárólag az alábbi esetekben kerülhetnek továbbításra:
                </p>
                <ul className="list-disc list-inside flex flex-col gap-2 pl-2">
                  <li>Jogszabályi kötelezettség teljesítése esetén (pl. hatósági megkeresés)</li>
                  <li>Technikai szolgáltatók (pl. tárhelyszolgáltató), akik adatfeldolgozóként járnak el és megfelelő adatvédelmi garanciákat nyújtanak</li>
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">6. Az érintett jogai</h2>
                <p>A GDPR alapján az alábbi jogokat gyakorolhatod:</p>
                <ul className="list-disc list-inside flex flex-col gap-2 pl-2">
                  <li><strong className="text-foreground">Hozzáférési jog</strong> - tájékoztatást kérhetsz a rólad tárolt adatokról</li>
                  <li><strong className="text-foreground">Helyesbítési jog</strong> - kérheted a pontatlan adatok helyesbítését</li>
                  <li><strong className="text-foreground">Törlési jog</strong> - kérheted az adataid törlését (&ldquo;az elfeledtetéshez való jog&rdquo;)</li>
                  <li><strong className="text-foreground">Az adatkezelés korlátozásához való jog</strong></li>
                  <li><strong className="text-foreground">Adathordozhatósági jog</strong> - kérheted az adataid géppel olvasható formátumban történő kiadását</li>
                  <li><strong className="text-foreground">Tiltakozási jog</strong> - tiltakozhatsz a jogos érdeken alapuló adatkezelés ellen</li>
                  <li><strong className="text-foreground">Hozzájárulás visszavonása</strong> - bármikor visszavonhatod a korábban adott hozzájárulásod</li>
                </ul>
                <p>
                  Jogaid gyakorlásához írj az <a href="mailto:info@magyarmatchtours.com" className="text-amber underline">info@magyarmatchtours.com</a> e-mail-címre. Panasz esetén fordulhatsz az illetékes felügyeleti hatósághoz is.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">7. Adatbiztonság</h2>
                <p>
                  Megfelelő technikai és szervezési intézkedésekkel gondoskodunk a személyes adatok biztonságáról, a jogosulatlan hozzáférés, megváltoztatás, nyilvánosságra hozatal és törlés ellen.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">8. Sütik</h2>
                <p>
                  A weboldalon alkalmazott sütikről részletes tájékoztatót{' '}
                  <Link href="/cookie-szabalyzat" className="text-amber underline hover:text-foreground transition-colors">
                    Cookie-szabályzatunkban
                  </Link>{' '}
                  találsz.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <h2 className="font-serif text-2xl font-bold text-ink">9. Irányelvek módosítása</h2>
                <p>
                  Fenntartjuk a jogot, hogy ezeket az irányelveket módosítsuk. A változásokról a weboldalon tájékoztatunk. A módosítás dátumát az oldal tetején jelöljük.
                </p>
              </div>

              <div className="border-t border-border pt-8 flex gap-6">
                <Link href="/cookie-szabalyzat" className="font-mono text-xs text-amber hover:text-foreground transition-colors">
                  Cookie-szabályzat →
                </Link>
                <Link href="/kapcsolat" className="font-mono text-xs text-muted-foreground hover:text-amber transition-colors">
                  Kapcsolatfelvétel →
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

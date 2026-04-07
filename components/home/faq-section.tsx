'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Kell-e előzetes tapasztalat a túrákon való részvételhez?',
    a: 'Minden túránkhoz megadjuk az ajánlott fizikai felkészültségi szintet. Van könnyed, félnapos útvonaltól több napos, erdei éjszakázással járó expedícióig. A leírásokban mindig jelöljük, mire számíthatsz.',
  },
  {
    q: 'Hogyan lehet csatlakozni egy túrához?',
    a: 'A katalógusban böngészheted az elérhető útvonalakat. Minden túraoldalon megtalálod a "Részvételi igény leadása" gombot, amelyen keresztül felvesszük veled a kapcsolatot és egyeztetjük a részleteket.',
  },
  {
    q: 'Mik azok a "szerzői" túrák?',
    a: 'Túráink nem másolnak ismert touristautakat. Minden útvonal saját terepismeretünk és tapasztalatunk alapján jött létre - rejtekajtókon, nem jelölt erdészeti utakon, természeti átkelőkön és csendes mezőkön keresztül. Minden túra egyedi és megismételhetetlen összeállítás.',
  },
  {
    q: 'Mit érdemes magunkkal vinni?',
    a: 'Minden túra visszaigazolójában részletes felszerelési ajánlót küldünk, az adott útvonalhoz és évszakhoz igazítva. Az alapelv: amit nem viszel magaddal, azt nem kell cipelned - de amire szükséged lehet, azt ne hagyd otthon.',
  },
  {
    q: 'Lehet-e csoportos részvételt kérni?',
    a: 'Igen. Baráti csoportoknak, munkahelyi csapatoknak és más közösségeknek egyaránt szervezünk privát túrákat. A kapcsolatfelvételi oldalon jelezd az igényt, és részletes ajánlatot készítünk számodra.',
  },
  {
    q: 'Mi történik rossz időjárás esetén?',
    a: 'A természet nem mindig együttműködő - és ez a varázs része. Enyhébb esőre felkészítünk, súlyosabb időjárás esetén módosítjuk vagy elhalasztjuk az útvonalat. Biztonságod az első, az élmény pedig sokféleképpen megszerezhető.',
  },
]

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <section className="bg-muted py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left sticky header */}
          <div className="md:sticky md:top-28">
            <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-4">Kérdések & válaszok</p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight text-balance">
              Amire kíváncsi vagy
            </h2>
            <p className="font-mono text-sm text-muted-foreground mt-6 leading-relaxed max-w-sm">
              Ha nem találod a választ a kérdésedre, írj nekünk a kapcsolatfelvételi oldalon - örömmel válaszolunk.
            </p>
          </div>

          {/* Right accordion */}
          <div className="flex flex-col divide-y divide-border">
            {faqs.map((faq, idx) => (
              <div key={idx} className="py-5">
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-start justify-between gap-4 text-left group"
                  aria-expanded={openIdx === idx}
                >
                  <span className="font-serif text-base font-semibold text-ink leading-snug group-hover:text-primary transition-colors">
                    {faq.q}
                  </span>
                  <span className="shrink-0 mt-0.5 text-stone">
                    {openIdx === idx ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {openIdx === idx && (
                  <p className="font-mono text-xs leading-relaxed text-muted-foreground mt-4 pr-8">
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

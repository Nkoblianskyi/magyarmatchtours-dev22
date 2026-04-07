import Image from 'next/image'

export default function JourneyStorySection() {
  return (
    <section id="tortenet" className="bg-background py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-20">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-4">Az utazás története</p>
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-ink leading-tight text-balance max-w-2xl">
            Nem csak eljutsz valahova — átalakulhatsz az úton
          </h2>
        </div>

        {/* Two-column story intro */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24 items-center">
          <div className="flex flex-col gap-6">
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              Minden túránk egy szerzői alkotás. Nem turistaútvonalak, nem tömegközlekedés, nem ismert látványosságok — hanem élő terepek, ismeretlen erdészeti ösvények, vad mezők, csendes völgyek és az a különleges pillanat, amikor az égbolt kiszélesedik fölötted.
            </p>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground">
              Túráink egy belső utazást is jelentenek. Míg a test dolgozik, az elme elcsendesedik. A természet ritmusa átveszi az irányítást, és valami megváltozik benned.
            </p>
            <div className="border-l-2 border-amber pl-5 mt-2">
              <p className="font-serif text-lg italic text-ink leading-relaxed">
                &ldquo;Az ösvény nem ér véget a célnál — ott kezdődik.&rdquo;
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src="/images/trail-forest.jpg"
              alt="Erdei ösvény fák között, szűrt napsütésben"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Before / During / After emotional blocks */}
        <div className="mb-6">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-stone mb-8">Az érzelmi utazás ívei</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
            {[
              {
                phase: 'Előtte',
                phaseEn: 'Before',
                num: '01',
                title: 'Az elvárás csendje',
                body: 'A felkészülés napjai mások. Az ismeretlen útvonal képe ott él a gondolataid mögött. Valami dolgozik benned — izgatottság, kíváncsiság, és egy halvány félelem, ami éppen azt teszi értékessé, ami előttéd áll.',
                image: '/images/mountain-dawn.jpg',
                alt: 'Hajnali táj, ködös völgy egy kiemelkedés mögött',
              },
              {
                phase: 'Közben',
                phaseEn: 'During',
                num: '02',
                title: 'A mozgás meditációja',
                body: 'Az ösvény fölszívja a zajt. Már nem számlálod a kilométereket — csak lépsz, vagy tekersz, és a világ lassan más arányokat ölt. A fáradtság valójában jelenlét. Ott vagy, teljesen.',
                image: '/images/cycling-path.jpg',
                alt: 'Kerékpáros út mezők és réteken keresztül',
              },
              {
                phase: 'Utána',
                phaseEn: 'After',
                num: '03',
                title: 'A csend, ami marad',
                body: 'Hazaérsz. Minden a régi. De valami megváltozott — nem látványosan, hanem mélyebben. Másképp nézed a hétköznapokat. Az ösvény benne maradt valahol, és hív vissza.',
                image: '/images/camp-evening.jpg',
                alt: 'Esti tábortűz erdei tisztáson, csillagos ég alatt',
              },
            ].map((block) => (
              <div key={block.num} className="bg-background group overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={block.image}
                    alt={block.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-ink/30 group-hover:bg-ink/15 transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-white/70 bg-ink/50 px-2 py-1">
                      {block.phaseEn}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="font-serif text-5xl font-bold text-white/20">{block.num}</span>
                  </div>
                </div>
                <div className="p-8">
                  <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-amber mb-2">{block.phase}</p>
                  <h3 className="font-serif text-xl font-bold text-ink mb-4 leading-snug">{block.title}</h3>
                  <p className="font-mono text-xs leading-relaxed text-muted-foreground">{block.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

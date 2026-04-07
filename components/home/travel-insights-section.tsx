import Image from 'next/image'

const insights = [
  {
    num: '01',
    title: 'Az optimális évszak kiválasztása',
    body: 'A tavaszi és őszi időszak rejtett kincsei: a természet nem a naptár szerint él, hanem a saját ritmusában. Megtanítjuk olvasni a jeleit.',
    image: '/images/autumn-trail.jpg',
    alt: 'Őszi erdei ösvény narancssárga lombkoronával',
  },
  {
    num: '02',
    title: 'Felszerelés a lényegre redukálva',
    body: 'Mennyi az elég? Az évek során megtanultuk, hogy a legjobb felkészülés az, amelyik nem vonja el a figyelmet magáról az útról.',
    image: '/images/valley-panorama.jpg',
    alt: 'Panorámakilátás völgyre és mezőkre egy dombtetőről',
  },
  {
    num: '03',
    title: 'A lassítás technikája',
    body: 'A természetben nincs "időhiány" - csak mi hozzuk magunkkal. Az ösvény megtanít elengedni. Ez az egyik legfontosabb készség, amit egy hosszú túra ad.',
    image: '/images/river-path.jpg',
    alt: 'Folyóparti ösvény fűzfák alatt, reggeli fényben',
  },
  {
    num: '04',
    title: 'Éjszakák a szabad ég alatt',
    body: 'A sátor nem szállás - portál. Amikor lehunyt szemmel hallgatod az erdőt, megérted, miért érdemes volt eljönni. A természetes hangok más minőségű álmot hoznak.',
    image: '/images/camp-evening.jpg',
    alt: 'Erdei tábortűz fény alkonyatban',
  },
]

export default function TravelInsightsSection() {
  return (
    <section className="bg-background py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-4">Útilátókép</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-ink leading-tight text-balance max-w-xl">
            Amit a hosszú utak megtanítanak
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {insights.map((ins) => (
            <div key={ins.num} className="bg-background group overflow-hidden flex flex-col md:flex-row">
              <div className="relative w-full md:w-40 h-48 md:h-auto shrink-0 overflow-hidden">
                <Image
                  src={ins.image}
                  alt={ins.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col justify-center gap-3">
                <span className="font-serif text-4xl font-bold text-muted/80">{ins.num}</span>
                <h3 className="font-serif text-lg font-bold text-ink leading-snug">{ins.title}</h3>
                <p className="font-mono text-xs leading-relaxed text-muted-foreground">{ins.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

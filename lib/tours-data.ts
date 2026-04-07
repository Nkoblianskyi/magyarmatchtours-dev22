export type Tour = {
  slug: string
  title: string
  type: string
  duration: string
  difficulty: string
  shortDescription: string
  fullDescription: string[]
  image: string
  imageAlt: string
  detailImages: { src: string; alt: string }[]
  highlights: string[]
  included: string[]
  notIncluded: string[]
  nextDates: string[]
  beforeText: string
  duringText: string
  afterText: string
}

export const tours: Tour[] = [
  {
    slug: 'erdei-vadonvezeto-tura',
    title: 'Erdei vadonvezető - Őszi lomb alatt',
    type: 'Gyalogos',
    duration: '3 nap / 2 éjszaka',
    difficulty: 'Közepes',
    shortDescription:
      'Három nap az ismeretlen erdő szívében - éjszakázás a szabad ég alatt, csendes völgyek, hajnali párás erdők és belső megújulás.',
    fullDescription: [
      'Ez a túra nem egy teljesítménytúra. Nem az a kérdés, hány kilométert teszel meg - hanem az, hogy mit hagysz magad mögött.',
      'Az útvonal egy tölgyes erdő széléről indul, át egy mocsárréten, fel egy bükkös gerinc mentén, le egy félig titkos forráshoz, majd az éjszakai tábor helyéig, ahol a tüzet magunk rakjuk.',
      'Reggelente őszi köd fogad. Délelőtt a lomb áttöri a fényt. Esténként az erdő saját hangján szól hozzád.',
    ],
    image: '/images/trail-forest.jpg',
    imageAlt: 'Erdei ösvény őszi lombkorona alatt',
    detailImages: [
      { src: '/images/autumn-trail.jpg', alt: 'Őszi narancssárga lombszőnyeg az ösvényen' },
      { src: '/images/camp-evening.jpg', alt: 'Esti tábortűz erdei tisztáson' },
      { src: '/images/mountain-dawn.jpg', alt: 'Hajnali köd a völgy felett' },
    ],
    highlights: [
      'Teljesen jelöletlen, szerzői útvonal',
      'Éjszakai táborozás természetes tisztáson',
      'Forrástól forrásig navigáció',
      'Maximálisan 8 résztvevő/csoport',
      'Naplemente a gerinctől',
    ],
    included: [
      'Útvezetés a túra teljes ideje alatt',
      'Részletes felkészítő csomag előre',
      'Éjszakai tábori logisztika',
      'Útközben fogyasztható természetes élelmiszer-ajánló',
    ],
    notIncluded: [
      'Személyes felszerelés és ruházat',
      'Saját étel és ital',
      'Odautazás a gyülekezési ponthoz',
    ],
    nextDates: ['2026. szeptember 12-14.', '2026. október 3-5.', '2026. október 24-26.'],
    beforeText:
      'Napokkal előtte más leszel. Az ismeretlen erdő képe ott kísér, és ez az izgatottság a legjobb felkészítő.',
    duringText:
      'A harmadik kilométer után elfelejted a hétköznapokat. Csak a lépések vannak, a szél, a fény. Ez az igazi jelenlét.',
    afterText:
      'Valami megmaradt. Nem a kilométerek száma - hanem az a reggeli csend, amikor a köd lassan felszállt a fák fölé.',
  },
  {
    slug: 'dombvideki-kerekparos-expedicio',
    title: 'Dombvidéki kerékpáros expedíció',
    type: 'Kerékpáros',
    duration: '5 nap / 4 éjszaka',
    difficulty: 'Haladó',
    shortDescription:
      'Öt nap kavicsos ösvényeken, dombhátakon és völgyek között - Magyarország belső tájainak legszebb szerzői kerékpárútja.',
    fullDescription: [
      'Ez a túra egy igazi expedíció. Nem aszfalton, hanem kavicsúton, dülőutakon és erdészeti pályákon haladsz. A terep változó - lapos mezők, meredek dombhátak, és olyan völgyek, amelyeket senkinek sem jutna eszébe kerékpározni.',
      'Pontosan ezért csináljuk.',
      'Az útvonal minden napja más karakterű. Az első nap a rálépés - a test szokja a ritmust. A harmadik nap az áttörés. Az utolsó nap a megérkezés, amelyet nem felejt el az ember.',
    ],
    image: '/images/cycling-path.jpg',
    imageAlt: 'Kavicsos kerékpárút mezők és rétek között',
    detailImages: [
      { src: '/images/valley-panorama.jpg', alt: 'Völgypanoráma dombtetőről' },
      { src: '/images/river-path.jpg', alt: 'Folyóparti kerékpárút' },
      { src: '/images/hero-landscape.jpg', alt: 'Nyílt táj és kerékpárút' },
    ],
    highlights: [
      'Napi 40-60 km kavicsos terepen',
      'Teljesen autómentes napokon',
      'Szerzői útvonal, nincs ismételt szakasz',
      'Panorámás éjszakai pihenők',
      'Maximum 6 kerékpáros/csoport',
    ],
    included: [
      'Teljes útvezetés és terepismertetés',
      'Csomagszállítás táborok között',
      'Felkészítő útiterv és térkép',
      'Napi útvonalmódosítás lehetősége',
    ],
    notIncluded: [
      'Saját kerékpár',
      'Sisak és személyes biztonsági felszerelés',
      'Étkezés',
      'Odautazás',
    ],
    nextDates: ['2026. augusztus 8-12.', '2026. szeptember 5-9.', '2026. szeptember 26-30.'],
    beforeText:
      'A lábak még nem tudják, mi vár rájuk. De a szíved már sejti, hogy ez más lesz, mint minden eddigi.',
    duringText:
      'A harmadik napon már nem a cél számít. Csak az ösvény következő kanyarjáig nézel. Ez a kerékpározás meditációja.',
    afterText:
      'Egy hétig más tempóban jársz a városban is. Mintha valami átprogramozódott volna. Ez az expedíció utóíze.',
  },
  {
    slug: 'volgyatjaro-ejszakas-tura',
    title: 'Völgyátjáró - Éjszakai ébredés',
    type: 'Vegyes terep',
    duration: '4 nap / 3 éjszaka',
    difficulty: 'Nehéz',
    shortDescription:
      'Négy nap a völgyek labirintusában, hajnali indulásokkal, csillagos éjszakákkal és olyan kilátópontokkal, amelyekre nincsenek jelzőtáblák.',
    fullDescription: [
      'Egyes napok hajnali négykor indulnak. Ez nem büntetés - ez a jutalom. Az a fény, amelyet hajnalban egy dombgerincről látsz, nem ismétlődik meg napsütéses délután.',
      'A völgyátjáró útvonal nem lineáris - kanyarog, visszakanyarodik, meglepetést tartogat. Néhol vizes a talaj, néhol szikla van. Mindig máshogy fest a táj.',
      'Ez a túra azoknak szól, akik nem félnek a nehezebbtől - és tudják, hogy a legnehezebb napokból lesz a legjobb történet.',
    ],
    image: '/images/mountain-dawn.jpg',
    imageAlt: 'Hajnali ködfelhő völgy felett, sziklás gerincen állva',
    detailImages: [
      { src: '/images/trail-forest.jpg', alt: 'Meredek erdei ösvény fák között' },
      { src: '/images/camp-evening.jpg', alt: 'Tábortűz csillagos égbolt alatt' },
      { src: '/images/autumn-trail.jpg', alt: 'Őszi ösvény sziklás terepen' },
    ],
    highlights: [
      'Hajnali 4 órai indulásokkal tervezett napok',
      'Jelöletlen völgyátkelők',
      'Csillagos éjszakák tábori bivakon',
      'Maximum 5 fő/csoport',
      'Fizikai és mentális kihívás',
    ],
    included: [
      'Tapasztalt vezető minden szakaszon',
      'Biztonsági berendezések',
      'Útiterv és navigációs segítség',
      'Részletes felkészítő anyag előre',
    ],
    notIncluded: [
      'Személyes tábori felszerelés',
      'Étkezés',
      'Odautazás a start ponthoz',
    ],
    nextDates: ['2026. augusztus 22-25.', '2026. szeptember 19-22.', '2026. október 10-13.'],
    beforeText:
      'Kicsit félsz. Jól van. Ez jelenti, hogy komolyan veszed, ami előtted áll - és ez az igazi felkészülés.',
    duringText:
      'Hajnali négykor, amikor a világ alszik és te már elindultál - akkor tudod, miért csináltad. Ez az a perc.',
    afterText:
      'Napokig alszol mélyebben. A test emlékszik. A nehéz napok nem nyomnak - emelnek, ha már mögötted vannak.',
  },
  {
    slug: 'folyomenti-vandoras',
    title: 'Folyómenti vándorlás - Csendes partok',
    type: 'Gyalogos',
    duration: '2 nap / 1 éjszaka',
    difficulty: 'Könnyű',
    shortDescription:
      'Egy hétvége a folyó mellett - nincs sietség, csak lépések, víz, madárszó és az az érzés, hogy végre időd van megállni.',
    fullDescription: [
      'Ez a legkönnyebb belépési pontunk - de ne gondold, hogy kevésbé értékes. Két nap a folyó mentén elvarázsol, még ha "csak" könnyű terepen jársz is.',
      'A folyó ritmusa lassít. A partok váltakoznak: hol sűrű fűz alatt, hol nyílt réteken haladsz. Éjszaka a patak zubog, reggel a köd száll.',
    ],
    image: '/images/river-path.jpg',
    imageAlt: 'Folyóparti ösvény reggeli fényben',
    detailImages: [
      { src: '/images/valley-panorama.jpg', alt: 'Völgykilátás a folyó fölött' },
      { src: '/images/trail-forest.jpg', alt: 'Parti erdei sétaösvény' },
      { src: '/images/mountain-dawn.jpg', alt: 'Hajnali köd a folyó felett' },
    ],
    highlights: [
      'Napi 12-18 km lapos terepen',
      'Folyóparti tábor',
      'Ideális első természetjáró élménynek',
      'Maximum 10 fő/csoport',
    ],
    included: [
      'Útvezetés',
      'Tábori elhelyezés logisztika',
      'Felkészítő anyag',
    ],
    notIncluded: [
      'Saját sátor és hálózsák',
      'Étkezés',
      'Odautazás',
    ],
    nextDates: ['2026. augusztus 2-3.', '2026. augusztus 23-24.', '2026. szeptember 13-14.', '2026. október 4-5.'],
    beforeText:
      'Nincs nagy felkészülés. Csak pack be a hátizsákot és engedj el mindent, amit a héten magaddal cipelted.',
    duringText:
      'A folyó mindig tovább folyik. Te is csak lépsz tovább. Ez az egyszerűség maga a gyógyszer.',
    afterText:
      'Két napért nem adtál fel semmit. Cserébe kaptál valamit, amire szüksége volt a fejednek.',
  },
  {
    slug: 'gerincturo-magaspont',
    title: 'Gerinctúra - A magasság csöndje',
    type: 'Gyalogos',
    duration: '2 nap / 1 éjszaka',
    difficulty: 'Közepes',
    shortDescription:
      'Egy gerincen végigmenni különleges dolog: mindkét oldalon a táj, a szél közvetlenül fúj, és érzed, hogy fent vagy - fizikailag és lelkileg is.',
    fullDescription: [
      'Ez a túra gerincvonulaton vezet. Bal oldalt egy völgy, jobb oldalt egy másik. Fent a szél. Alattad a világ.',
      'A gerinc nem egyszerű terep - de nem is kegyetlen. A kihívás mértéke pont az, ami által valódi élménnyé válik.',
    ],
    image: '/images/valley-panorama.jpg',
    imageAlt: 'Panorámakilátás dombgerincről völgy felett',
    detailImages: [
      { src: '/images/mountain-dawn.jpg', alt: 'Hajnali köd dombgerincen' },
      { src: '/images/hero-landscape.jpg', alt: 'Nyílt tájkép dombokkal' },
      { src: '/images/camp-evening.jpg', alt: 'Esti tábor gerincen' },
    ],
    highlights: [
      '360 fokos panorámás részek',
      'Szélvédett gerincoldali tábor',
      'Napi 18-25 km',
      'Maximum 8 fő/csoport',
    ],
    included: ['Útvezetés', 'Felkészítő anyag', 'Tábori logisztika'],
    notIncluded: ['Személyes felszerelés', 'Étkezés', 'Odautazás'],
    nextDates: ['2026. augusztus 16-17.', '2026. szeptember 6-7.', '2026. október 18-19.'],
    beforeText:
      'A gerinc képe megmarad. Napokig visszatér a gondolataidba, és ez jó jel - azt jelenti, a testednek és az elmédnek egyaránt szüksége van erre.',
    duringText:
      'A szél nem engedi, hogy gondolkodj. Csak érzed a felszabadulást - a tér, az ég, az ösvény maga.',
    afterText:
      'Hazaértél. A várost most kicsit magasabbról látod. Metaforikusan és valójában is.',
  },
  {
    slug: 'mehesz-ut-tavaszi-mezo',
    title: 'Méhész-út - Tavaszi mezők átkelése',
    type: 'Kerékpáros',
    duration: '1 nap',
    difficulty: 'Könnyű',
    shortDescription:
      'Egynapos kerékpáros kaland virágzó tavaszi mezőkön, szélmalmok előtti kavicsokon és elhagyott dülőutakon - ideális bevezető és lélekfrissítő.',
    fullDescription: [
      'Ha csak egy napod van, ez a túra a legjobb döntés. Egynapos körkerékpározás tavaszi mezőkön, illatos réteken és csendes dülőutakon.',
      'A neve onnan ered, hogy az útvonalon egykor méhészek vándoroltak a virágzó tájak között. Ma te teszel ugyanígy - csak kerékpárral.',
    ],
    image: '/images/cycling-path.jpg',
    imageAlt: 'Tavaszi kerékpárút virágzó mezők között',
    detailImages: [
      { src: '/images/river-path.jpg', alt: 'Kavicsos dülőút' },
      { src: '/images/valley-panorama.jpg', alt: 'Virágzó mezők panorámája' },
      { src: '/images/trail-forest.jpg', alt: 'Erdő szélén futó kerékpárút' },
    ],
    highlights: [
      'Napi 35–45 km kavicson és mezőn',
      'Egynapos, visszatérő útvonal',
      'Virágzó réteken át',
      'Maximum 12 fő/csoport',
    ],
    included: ['Útvezetés', 'Napi útvonaltérkép'],
    notIncluded: ['Saját kerékpár és felszerelés', 'Étkezés', 'Odautazás'],
    nextDates: ['2026. augusztus 9.', '2026. augusztus 30.', '2026. szeptember 20.', '2026. október 11.'],
    beforeText:
      'Reggel felkelsz és tudod: ma nem ülsz irodában. Ma a mezők között tekersz. Ez a legjobb érzés pénteken este.',
    duringText:
      'A virágok illata és a kavicsok ritmusa: szinte tudatlan lesz az ember. Így kell kerékpározni.',
    afterText:
      'Egy nap. Mégis más vagy hazaérve. Ez a természet adagolásának ereje.',
  },
]

import Link from 'next/link'
import { MapPin, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 font-mono text-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-2" aria-label="Magyar Match Tours főoldal">
            <Image src="/favicon.ico" alt="Magyar Match Tours logo" width={32} height={32} />
            <span className="font-serif text-lg font-bold tracking-tight text-white transition-colors duration-300">
              Magyar Match Tours
            </span>
          </Link>
          <p className="text-white/50 leading-relaxed text-xs max-w-xs">
            Szerzői természetjáró kalandtúrák Magyarország erdeiben, völgyeiben és dombvidékein. Minden út egy egyedi élmény.
          </p>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-3">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Navigáció</p>
          {[
            { href: '/', label: 'Főoldal' },
            { href: '/katalogus', label: 'Túrakatalógus' },
            { href: '/rolunk', label: 'Rólunk' },
            { href: '/kapcsolat', label: 'Kapcsolat' },
            { href: '/adatvedelmi-iranyelvek', label: 'Adatvédelmi irányelvek' },
            { href: '/cookie-szabalyzat', label: 'Cookie-szabályzat' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-white/60 hover:text-white transition-colors text-xs tracking-wide"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-4">
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-2">Elérhetőség</p>
          <div className="flex items-start gap-3 text-white/60">
            <MapPin size={14} className="mt-0.5 shrink-0 text-amber" />
            <span className="text-xs leading-relaxed">
              K.C. NTOMATA LIMITED<br />
              Stylianou Lena<br />
              24 Christiana Court, Flat/Office 202<br />
              Strovolos, 2019 Nicosia, Cyprus
            </span>
          </div>
          <div className="flex items-center gap-3 text-white/60">
            <Mail size={14} className="shrink-0 text-amber" />
            <a
              href="mailto:info@magyarmatchtours.com"
              className="text-xs hover:text-white transition-colors"
            >
              info@magyarmatchtours.com
            </a>
          </div>
          <p className="text-xs text-white/40 mt-2">
            Weboldal:{' '}
            <span className="text-white/60">magyarmatchtours.com</span>
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/30">
        <p>© {new Date().getFullYear()} K.C. NTOMATA LIMITED. Minden jog fenntartva.</p>
        <div className="flex gap-5">
          <Link href="/adatvedelmi-iranyelvek" className="hover:text-white/60 transition-colors">
            Adatvédelem
          </Link>
          <Link href="/cookie-szabalyzat" className="hover:text-white/60 transition-colors">
            Cookie-szabályzat
          </Link>
        </div>
      </div>
    </footer>
  )
}

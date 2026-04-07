'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin, Send, X, Check } from 'lucide-react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import CookieBanner from '@/components/cookie-banner'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
  consent: boolean
}

const INITIAL: FormData = { name: '', email: '', subject: '', message: '', consent: false }

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(INITIAL)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [showSuccess, setShowSuccess] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const validate = (): boolean => {
    const e: typeof errors = {}
    if (!form.name.trim()) e.name = 'A neved megadása kötelező.'
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = 'Érvényes e-mail cím szükséges.'
    if (!form.subject.trim()) e.subject = 'Tárgy megadása kötelező.'
    if (form.message.trim().length < 10) e.message = 'Legalább 10 karakter szükséges.'
    if (!form.consent) e.consent = 'Az adatkezelési hozzájárulás kötelező.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    // Simulate async submit
    setTimeout(() => {
      setSubmitting(false)
      setForm(INITIAL)
      setErrors({})
      setShowSuccess(true)
    }, 1000)
  }

  const inputClass = (field: keyof FormData) =>
    `w-full bg-background border font-mono text-sm px-4 py-3 outline-none transition-colors focus:border-primary ${
      errors[field] ? 'border-destructive' : 'border-border'
    }`

  return (
    <>
      <Navigation />
      <main>
        {/* Header */}
        <section className="relative pt-36 pb-20 bg-ink overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/river-path.jpg"
              alt="Folyóparti ösvény — kapcsolatfelvétel"
              fill
              priority
              className="object-cover object-center opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-ink/70 to-ink" />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <p className="font-mono text-[11px] tracking-[0.35em] uppercase text-amber mb-4">
              Írj nekünk
            </p>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight text-balance max-w-xl mb-6">
              Kapcsolat
            </h1>
            <p className="font-mono text-sm text-white/55 leading-relaxed max-w-xl">
              Kérdésed van egy túráról? Csoportos részvételt tervezel? Egyedi útvonalat szeretnél? Mindenre válaszolunk.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-background py-20 md:py-28">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-16">

            {/* Left info */}
            <div className="flex flex-col gap-10">
              <div>
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-5">Elérhetőség</p>
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-3">
                    <MapPin size={15} className="text-amber mt-0.5 shrink-0" />
                    <div className="font-mono text-xs text-muted-foreground leading-relaxed">
                      <p className="font-bold text-foreground text-sm mb-1">K.C. NTOMATA LIMITED</p>
                      <p>Stylianou Lena</p>
                      <p>24 Christiana Court, Flat/Office 202</p>
                      <p>Strovolos, 2019 Nicosia</p>
                      <p>Cyprus</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail size={15} className="text-amber shrink-0" />
                    <a
                      href="mailto:info@magyarmatchtours.com"
                      className="font-mono text-sm text-muted-foreground hover:text-amber transition-colors"
                    >
                      info@magyarmatchtours.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-4">Oldaltérkép</p>
                <ul className="flex flex-col gap-2.5">
                  {[
                    { href: '/', label: 'Főoldal' },
                    { href: '/katalogus', label: 'Túrakatalógus' },
                    { href: '/rolunk', label: 'Rólunk' },
                    { href: '/adatvedelmi-iranyelvek', label: 'Adatvédelmi irányelvek' },
                    { href: '/cookie-szabalyzat', label: 'Cookie-szabályzat' },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="font-mono text-xs text-muted-foreground hover:text-amber transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/camp-evening.jpg"
                  alt="Tábortűz erdei tisztáson"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Right form */}
            <div className="lg:col-span-2">
              <p className="font-mono text-[11px] tracking-[0.3em] uppercase text-amber mb-6">Üzenet küldése</p>
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="font-mono text-[11px] tracking-widest uppercase text-stone">
                      Teljes név *
                    </label>
                    <input
                      id="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass('name')}
                      placeholder="pl. Kovács Anna"
                    />
                    {errors.name && <p className="font-mono text-[11px] text-destructive">{errors.name}</p>}
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="font-mono text-[11px] tracking-widest uppercase text-stone">
                      E-mail cím *
                    </label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass('email')}
                      placeholder="pelda@email.com"
                    />
                    {errors.email && <p className="font-mono text-[11px] text-destructive">{errors.email}</p>}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="subject" className="font-mono text-[11px] tracking-widest uppercase text-stone">
                    Tárgy *
                  </label>
                  <input
                    id="subject"
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={inputClass('subject')}
                    placeholder="pl. Kérdés a dombvidéki kerékpáros expedícióról"
                  />
                  {errors.subject && <p className="font-mono text-[11px] text-destructive">{errors.subject}</p>}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="font-mono text-[11px] tracking-widest uppercase text-stone">
                    Üzenet *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${inputClass('message')} resize-none`}
                    placeholder="Írd le, miben segíthetünk..."
                  />
                  {errors.message && <p className="font-mono text-[11px] text-destructive">{errors.message}</p>}
                </div>

                <div className="flex items-start gap-3">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                    className="mt-0.5 accent-primary shrink-0 w-4 h-4"
                  />
                  <label htmlFor="consent" className="font-mono text-xs text-muted-foreground leading-relaxed">
                    Hozzájárulok, hogy az általam megadott személyes adatokat a K.C. NTOMATA LIMITED a megkeresésem kezelése céljából felhasználja. Az{' '}
                    <Link href="/adatvedelmi-iranyelvek" className="underline text-amber hover:text-foreground transition-colors">
                      adatvédelmi irányelveket
                    </Link>{' '}
                    elolvastam és elfogadtam. *
                  </label>
                </div>
                {errors.consent && <p className="font-mono text-[11px] text-destructive -mt-3">{errors.consent}</p>}

                <button
                  type="submit"
                  disabled={submitting}
                  className="self-start font-mono text-sm tracking-wide bg-primary text-primary-foreground px-10 py-4 hover:bg-primary/80 transition-colors disabled:opacity-50 flex items-center gap-3"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                      Küldés...
                    </>
                  ) : (
                    <>
                      <Send size={14} />
                      Üzenet elküldése
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <CookieBanner />

      {/* Success popup */}
      {showSuccess && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-ink/70 backdrop-blur-sm"
        >
          <div className="bg-background border border-border max-w-md w-full p-10 relative flex flex-col items-center text-center gap-5">
            <button
              onClick={() => setShowSuccess(false)}
              aria-label="Bezárás"
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X size={18} />
            </button>
            <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
              <Check size={28} className="text-primary" />
            </div>
            <h2 id="success-title" className="font-serif text-2xl font-bold text-ink">
              Üzenet elküldve!
            </h2>
            <p className="font-mono text-sm text-muted-foreground leading-relaxed">
              Köszönjük a megkeresést! Üzenetedet megkaptuk, és hamarosan felvesszük veled a kapcsolatot.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="font-mono text-sm tracking-wide bg-primary text-primary-foreground px-8 py-3 hover:bg-primary/80 transition-colors mt-2"
            >
              Rendben
            </button>
          </div>
        </div>
      )}
    </>
  )
}

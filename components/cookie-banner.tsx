'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }
  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-ink border-t border-white/10 px-6 py-5 md:flex md:items-center md:justify-between gap-8">
      <p className="font-mono text-xs text-white/70 leading-relaxed max-w-2xl mb-4 md:mb-0">
        Weboldalunk sütiket (cookie-kat) használ a felhasználói élmény javítása érdekében. Az &quot;Elfogadom&quot; gombra kattintva hozzájárul a sütik használatához.{' '}
        <Link href="/cookie-szabalyzat" className="underline text-amber hover:text-white transition-colors">
          Cookie-szabályzat
        </Link>
      </p>
      <div className="flex items-center gap-3 shrink-0">
        <button
          onClick={decline}
          className="font-mono text-xs tracking-wide text-white/50 hover:text-white transition-colors border border-white/20 px-4 py-2"
        >
          Elutasítom
        </button>
        <button
          onClick={accept}
          className="font-mono text-xs tracking-wide bg-primary text-primary-foreground px-6 py-2 hover:bg-primary/80 transition-colors"
        >
          Elfogadom
        </button>
      </div>
    </div>
  )
}

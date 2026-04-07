import type { Metadata, Viewport } from 'next'
import { Lora, Inter } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Magyar Match Tours — Szabadtéri Kalandtúrák Magyarországon',
  description:
    'Egyedi, természetjáró kalandtúrák Magyarország erdeiben, dombjai között és folyóvölgyeiben. Kerékpáros, gyalogos és erdei éjszakázós utak — minden út egy igazi történet.',
  generator: 'v0.app',
  metadataBase: new URL('https://magyarmatchtours.com'),
  openGraph: {
    title: 'Magyar Match Tours',
    description: 'Szabadtéri kalandtúrák Magyarország szívében.',
    url: 'https://magyarmatchtours.com',
    siteName: 'Magyar Match Tours',
    locale: 'hu_HU',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport: Viewport = {
  themeColor: '#3b5c38',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hu" data-scroll-behavior="smooth" className={`${lora.variable} ${inter.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}

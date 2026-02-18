import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })

export const metadata: Metadata = {
  title: 'Forge Piece - Premium Urban Streetwear with Mindset & Anime Vibes',
  description: 'Urban streetwear with motivational ink and anime glitches. For anyone who\'s still forging their story. Not a drop, a mindset. Premium t-shirts, Gen Z streetwear, Mumbai India.',
  keywords: 'forge piece, streetwear, urban clothing, Gen Z fashion, anime streetwear, motivational apparel, mindset wear, Mumbai streetwear, premium t-shirts, forgepiece',
  authors: [{ name: 'Forge Piece' }],
  creator: 'Forge Piece',
  publisher: 'Forge Piece',
  metadataBase: new URL('https://forgepiece.com'),
  openGraph: {
    title: 'Forge Piece - Premium Urban Streetwear',
    description: 'We are forging a mindset, not just a fit.',
    url: 'https://forgepiece.com',
    siteName: 'Forge Piece',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Forge Piece Logo',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forge Piece - Premium Urban Streetwear',
    description: 'We are forging a mindset, not just a fit.',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

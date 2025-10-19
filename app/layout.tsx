import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

export const metadata: Metadata = {
  title: 'Ojango - Build Bold. Trade Free. Thrive Together.',
  description: 'The African-made Operating System empowering entrepreneurs, creators & markets',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Ojango - Build Bold. Trade Free. Thrive Together.',
    description: 'The African-made Operating System empowering entrepreneurs, creators & markets to connect, trade & grow — all in one platform.',
    url: siteUrl,
    siteName: 'Ojango',
    images: [
      {
        url: '/og-image.png', // Make sure to create and place this image in the /public folder
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ojango - Build Bold. Trade Free. Thrive Together.',
    description: 'The African-made Operating System empowering entrepreneurs, creators & markets.',
    images: [`${siteUrl}/og-image.png`], // Make sure to create and place this image in the /public folder
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
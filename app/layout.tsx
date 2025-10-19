import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import { ThemeProvider } from './components/ThemeProvider'

const siteUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' })

const title = 'Ojango - Build Bold. Trade Free. Thrive Together.';
const description = 'The African-made Operating System empowering entrepreneurs, creators & markets to connect, trade & grow — all in one platform.';

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | Ojango`,
  },
  description: description,
  keywords: ['african commerce', 'e-commerce platform', 'marketplace builder', 'digital economy africa', 'entrepreneurship africa'],
  creator: 'Ojango',
  authors: [{ name: 'Ojango' }],
  metadataBase: new URL(siteUrl),
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'rgb(30 41 59)' },
  ],
  openGraph: {
    title: title,
    description: description,
    url: siteUrl,
    siteName: 'Ojango',
    images: [
      {
        url: '/og-image.png', // Make sure to create and place this image in the /public folder
        width: 1200,
        height: 630,
        alt: 'Ojango platform for African commerce',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [`${siteUrl}/og-image.png`],
    creator: '@ojango', // Replace with your actual Twitter handle
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
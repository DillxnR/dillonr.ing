import type { Metadata } from 'next'
import './globals.css'

const description = 'I build thoughtful, performant web apps and experiences that scale.'

export const metadata: Metadata = {
  metadataBase: new URL('https://dillonr.ing'),
  title: 'Dillon Ring',
  description,
  openGraph: {
    type: 'website',
    url: 'https://dillonr.ing',
    title: 'Dillon Ring',
    description,
    siteName: 'Dillon Ring',
    images: [
      {
        url: '/og-image.jpeg',
        width: 1200,
        height: 630,
        alt: description,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dillon Ring',
    description,
    images: ['/og-image.jpeg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="font-sans">
        {children}

      </body>
    </html>
  )
}

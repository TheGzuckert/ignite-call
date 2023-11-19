'use client'
import { globalStyles } from '@/styles/global'
import { Inter } from 'next/font/google'
// import './globals.css'

globalStyles()

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

// export const metadata: Metadata = {
//   title: {
//     template: '%s | devsotre',
//     default: 'devstore',
//   },
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.variable} lang="pt">
      <body className="bg-zinc-950 text-zinc-50 antialiased">{children}</body>
    </html>
  )
}

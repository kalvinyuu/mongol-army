import type { Metadata } from "next";
import "./globals.css";
import { JetBrains_Mono } from 'next/font/google'
import { Syne } from 'next/font/google'


const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains_mono',
})
const syne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={jetbrains_mono.variable + ' ' + syne.variable}>
        {children}
      </body>
    </html>
  )
}

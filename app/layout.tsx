import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '700'],
  variable: '--font-roboto' 
})

export const metadata: Metadata = {
  title: 'Personal Portfolio | Engineer',
  description: 'A vibrant and interactive personal portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}



import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/GrowModalContext'
import ModalBox from '@/components/modal/Modal';
import { useContext } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://final-type.vercel.app/'),
  title: 'Welcome to Tana',
  description: 'Welcome to Tana - Your Trusted Partner in Quality Assurance (QA) and Data Analytics Recruitment. Explore top-tier talent solutions, innovative recruitment processes, and opportunities for growth in the dynamic fields of QA and Data Analytics.',
  keywords: "Tana, QA recruitment, Data Analytics recruitment, top-tier talent solutions, innovative recruitment, growth opportunities",
  twitter: {
    card: 'app',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://nextjs.org/og.png',
      alt: 'Next.js Logo',
    },
    app: {
      name: 'twitter_app',
      id: {
        iphone: 'twitter_app://iphone',
        ipad: 'twitter_app://ipad',
        googleplay: 'twitter_app://googleplay',
      },
      url: {
        iphone: 'https://iphone_url',
        ipad: 'https://ipad_url',
      },
    },
  },

};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
  }) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/Maskgroup.png" />
        <meta property="og:image:type" content="website" />
      </head>
      <body className={inter.className}>
          <ThemeProvider>
            <Navbar />
            {/* <ModalBox/> */}
            {children}
            <Footer/>
          </ThemeProvider>
      </body>
    </html>
  )
}

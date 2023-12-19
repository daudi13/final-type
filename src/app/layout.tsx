import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import { ThemeProvider } from '@/context/GrowModalContext'
import ModalBox from '@/components/modal/Modal'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome to Tana',
  description: 'Welcome to Tana - Your Trusted Partner in Quality Assurance (QA) and Data Analytics Recruitment. Explore top-tier talent solutions, innovative recruitment processes, and opportunities for growth in the dynamic fields of QA and Data Analytics.',
  keywords: "Tana, QA recruitment, Data Analytics recruitment, top-tier talent solutions, innovative recruitment, growth opportunities"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <Navbar />
          <ModalBox/>
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}

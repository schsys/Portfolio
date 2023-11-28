import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Footer from '@/containers/Footer'
import { ThemeProvider } from '@/utils/withMT'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SCH Sistemas',
  description: 'Developing Solutions...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={inter.className}>
          {children}
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </ThemeProvider>
  )
}

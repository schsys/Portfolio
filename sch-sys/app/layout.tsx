import type { Metadata } from 'next'
import { Jura } from 'next/font/google'
import './globals.css'
import Footer from '@/containers/Footer'
import { ThemeProvider } from '@/utils/withMT'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

const inter = Jura({ subsets: ['latin'] })

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

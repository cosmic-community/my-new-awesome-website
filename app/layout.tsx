import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Awesome Website',
  description: 'A beautiful website built with Next.js and Cosmic CMS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-bold">
                My Awesome Website
              </Link>
              <div className="flex space-x-6">
                <Link href="/" className="hover:text-blue-600 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="hover:text-blue-600 transition-colors">
                  About
                </Link>
                <Link href="/blog" className="hover:text-blue-600 transition-colors">
                  Blog
                </Link>
                <Link href="/pricing" className="hover:text-blue-600 transition-colors">
                  Pricing
                </Link>
                <Link href="/social-links" className="hover:text-blue-600 transition-colors">
                  Social
                </Link>
                <Link href="/contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-100 py-8 mt-20">
          <div className="container mx-auto px-4 text-center text-gray-600">
            <p>&copy; 2024 My Awesome Website. Built with Next.js and Cosmic CMS.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
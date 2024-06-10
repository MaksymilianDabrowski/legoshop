import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import "slick-carousel/slick/slick.css"
import CartProvider from './components/Providers'
import ShoppingCart from './components/ShoppingCart'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LegoShop.com',
  description: 'Best LEGO sets for best prices',
  icons: {
    icon:
    {
      rel: "icon",
      type: "image/ico",
      url: "/favicon.ico",
    },
  }
} // Hey! Remember you have to attribute pocike

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return ( // Odnośniki do komponentów renderowane przed {children}
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          <ShoppingCart />
          {children}
        </CartProvider>
      </body>
    </html>
  )
}

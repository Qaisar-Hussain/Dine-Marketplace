import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './Footer'
import { GlobalContextProvider } from './context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dine Market Place',
  description: 'Chose From Thousands Of Your Favourite Dresses ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalContextProvider>
        <Navbar/>
        {children}
        </GlobalContextProvider>
        <Footer/>
        </body>
    </html>
  )
}

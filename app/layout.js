import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`min-h-screen bg-green-900 bg-opacity-80 ${inter.className}`}>
        <div className=''>
          <Navbar />
        <div className='max-w-xl'>
          {children}
        </div>
        <Footer />
        </div>
      </body>
    </html>
  )
}

/* <html lang="en">
      <body className={`bg-green-900 bg-opacity-80 w-screen overflow-y-scroll no-scrollbar ${inter.className}`}>
          <Navbar />
        <div className='pb-3 m-auto max-w-xl md:px-2'>
          {children}
        </div>
        <Footer />
      </body>
    </html> */
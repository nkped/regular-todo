import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AddBtn, CancelBtn } from './components/Buttons'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`overflow-y-scroll h-screen no-scrollbar bg-green-900 bg-opacity-95 ${inter.className}`}>
        <div className='m-auto max-w-xl h-screen border'>

          <div className='grid grid-flow-row h-full bg-yellow-900 border grid-rows-24 grid-cols-24'>

            <div className='row-start-1 row-end-4 border col-span-24'>
              <Navbar />
            </div>
            <div className='flex flex-col row-start-4 justify-center border col-span-24 row-end-15'>{children}</div>
            <div className='flex flex-col gap-5 justify-end items-center border col-span-24 row-start-15 row-end-23'>
              <AddBtn />
              <CancelBtn />          
            </div>
            <div className='bg-red-600 col-span-24 row-start-24 row-end-25'>
            <Footer />
            </div>
          </div>
         </div>
      </body>
    </html>
  )
}

/* grid-cols-1 grid-rows-6 */

/* <div className='grid row-[span_16_/_span_16] h-full border'>

            <div className='col-span-1 row-start-1 row-end-2 border'><Navbar /></div>
            <div className='col-span-1 row-start-2 row-end-4 border'>{children}</div>
            <div className='flex flex-col col-span-1 row-start-4 row-end-6 gap-5 justify-end items-center border'>
          
                <AddBtn />
                <CancelBtn />
          
            </div>
          <div className='w-full border'>Footer</div>
          </div>
         </div> */
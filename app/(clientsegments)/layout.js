import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { AddBtn, CancelBtn } from '../components/Buttons'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function ClientLayout({ children }) {
  return (
          <div className='grid grid-flow-row h-screen bg-yellow-900 border grid-rows-24 grid-cols-24'>

            <div className='row-start-1 row-end-4 border col-span-24'>
              <Navbar />
            </div>
            <div className='flex flex-col row-start-4 justify-center border col-span-24 row-end-15'>   {children}
            </div>
            <div className='flex flex-col gap-5 justify-end items-center border col-span-24 row-start-15 row-end-23'>
              <AddBtn />
              <CancelBtn />          
            </div>
            <div className='bg-red-600 col-span-24 row-start-24 row-end-25'>
            <Footer />
            </div>
          </div>
        )
}

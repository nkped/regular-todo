import { AddBtn, CancelBtn } from "../components/Buttons"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function ClientSegmentLayout({ children }) {
    return (
        <div>{children}</div>
        )
}
/* fixed bottom-0  */
  /* btn css  flex flex-col gap-6 items-center  */


  /* <div className='h-screen border-2 border-pink-700'>
            <div className="border max-h-1/6">
                <Navbar />
            </div>
            <div className='h-full border'>
            
            
            <div className="h-2/6 border">
                {children}
            </div>
            <div className="h-2/6 border" >
                <AddBtn />
                <CancelBtn />
            </div>
            
        </div>
        <div className="fixed bottom-0 w-full border max-h-1/6">
            <Footer />
        </div>
    </div>
 */
import { AddBtn, CancelBtn } from "../components/Buttons"


export default function ClientSegmentLayout({ children }) {
    return (      
        <div className='overflow-y-scroll min-h-screen no-scrollbar'>
            {children}
            <div className="flex flex-col gap-6 items-center border" >
                <AddBtn />
                <CancelBtn />
            </div>
        </div>
          )
  }
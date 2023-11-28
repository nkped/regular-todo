import TodoList from "./components/TodoList"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function homePage() {
/* Footer will probs rise above bottom when few todos */
  return(
    <div className='flex flex-col gap-7 min-h-screen'>
      <div className='border'><Navbar /></div>      
      <div className='border'><TodoList /></div>
      <div className=""><Footer /></div>      
    </div>
  )
}





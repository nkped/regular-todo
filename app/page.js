import TodoList from "./components/TodoList"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function homePage() {
/* Footer will probs rise above bottom when few todos */
  return(
    <div className='flex flex-col gap-9 px-3 min-h-screen'>
      <div className='sticky top-0'><Navbar /></div>      
      <div className=''><TodoList /></div>
      <div className=""><Footer /></div>      
    </div>
  )
}





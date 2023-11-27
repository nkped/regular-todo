import TodoList from "./components/TodoList"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function homePage() {

  return(
    <div className='flex flex-col gap-3 min-h-screen bg-yellow-900 border'>
      <div className='border'><Navbar /></div>      
      <div className='border'><TodoList /></div>
      <div className="fixed bottom-0 w-full bg-red-700 max-with-xl"><Footer /></div>      
    </div>
  )
}
import Link from "next/link"


export default function Navbar() {

    return(
        <nav className="flex justify-between px-6 py-3 text-xl font-extrabold text-gray-100" >            
        <Link className='hover:text-white' href='/'>Todos</Link>            
        <Link className='hover:text-white' href='/addTodo'>New</Link>
        </nav>
    )
}
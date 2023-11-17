import Link from "next/link"


export default function Navbar() {

    return(
        <nav className="flex justify-between px-6 py-3 font-mono text-xl font-extrabold text-gray-100 text-" >            
        <Link className='border-green-500 hover:border-b-2 hover:border-dashed hover:text-white' href='/'>Todos</Link>            
        <Link className='border-green-500 hover:border-b-2 hover:border-dashed hover:text-white' href='/addTodo'>New</Link>
        </nav>
    )
}
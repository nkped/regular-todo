import Link from "next/link"


export default function Navbar() {

    return(
        <nav className="flex sticky top-0 z-10 justify-between px-2 py-2 font-mono text-xl font-extrabold text-white text-opacity-70 border-gray-500 backdrop-filter backdrop-blur-lg bg-green-900/30">            
        <Link className='border-green-500 hover:border-b-4 hover:border-dashed hover:text-white active:text-green-500' href='/'>Todos</Link>            
        <Link className='border-green-500 hover:border-b-4 hover:border-dashed hover:text-white active:text-green-500' href='/testTodo'>TestTodos</Link>            
        <Link className='border-green-500 hover:border-b-4 hover:border-dashed hover:text-white active:text-green-500' href='/addTodo'>New</Link>
        </nav>
    )
}
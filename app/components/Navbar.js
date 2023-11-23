import Link from "next/link"


export default function Navbar() {

    return(
        <nav className="flex justify-between px-6 py-3 font-mono text-xl font-extrabold text-gray-100 border" >            
        <Link className='border-green-500 hover:border-b-2 hover:border-dashed hover:text-white active:text-green-500' href='/'>Todos</Link>            
        <Link className='border-green-500 hover:border-b-2 hover:border-dashed hover:text-white active:text-green-500' href='/testTodo'>TestTodos</Link>            
        <Link className='border-green-500 hover:border-b-2 hover:border-dashed hover:text-white active:text-green-500' href='/addTodo'>New</Link>
        </nav>
    )
}
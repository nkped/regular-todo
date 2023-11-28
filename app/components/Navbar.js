import Link from "next/link"


export default function Navbar() {

    return(
        <nav className="flex justify-between font-mono text-xl font-extrabold text-white text-opacity-90">            
        <Link className='border-green-500 hover:border-b-4 hover:border-dashed hover:text-white active:text-green-500' href='/'>Todos</Link>            
        <Link className='border-green-500 hover:border-b-4 hover:border-dashed hover:text-white active:text-green-500' href='/testTodo'>TestTodos</Link>            
        <Link className='border-green-500 hover:border-b-4 hover:border-dashed hover:text-white active:text-green-500' href='/addTodo'>New</Link>
        </nav>
    )
}
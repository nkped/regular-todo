import Link from "next/link"


export default function Navbar() {

    return(
        <nav className="flex justify-between px-6 py-4 text-xl font-bold text-white hover:shadow-sm bg-slate-300" >
            <Link className='hover:font-extrabold' href='/'>My Todos</Link>
            <Link className='hover:font-extrabold' href='/addTodo'>Add Todo</Link>
        </nav>
    )
}
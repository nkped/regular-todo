import Link from "next/link"


export default function Navbar() {

    return(
        <nav className="flex justify-between px-6 py-3" >
            <Link href='/'>My Todos</Link>
            <Link href='/addTodo'>Add Todo</Link>
        </nav>
    )
}
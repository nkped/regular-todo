'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function EditTodo({ id, title, description }) {

    const [ newTitle, setNewTitle ] = useState('')
    const [ newDescription, setNewDescription ] = useState('')
    const router = useRouter()

    console.log('id, title, description from EditTodo', id, title, description)

    const handleUpdate = async(e) => {
        e.preventDefault()
        console.log('newTitle, newDescription from EditTodo component', newTitle, newDescription)

        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({newTitle, newDescription})
            })
            if (res.ok) {
                console.log('todo was updated')
                router.push('/')
                router.refresh()
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <form className="flex flex-col gap-3 px-4" onSubmit={handleUpdate}>
            <input 
                className="px-2 py-4 mt-8 rounded-md border border-slate-300 bg-slate-50 hover:placeholder-slate-300"
                type="text" 
                placeholder={title} 
                value={newTitle} 
                onChange={(e) => setNewTitle(e.target.value)} 
             />
            <input 
                className="px-2 py-4 rounded-md border border-slate-300 bg-slate-50 hover:placeholder-slate-300"
                type="text" 
                placeholder={description} 
                value={newDescription} 
                onChange={(e) => setNewDescription(e.target.value)} 
                />
            <button type="submit" className="py-4 mt-3 font-bold text-white bg-green-400 rounded-md border border-green-500 hover:shadow-md hover:font-extrabold">Update Todo</button>
        </form>
    )
}

/* <button href='/' className="py-4 mt-3 font-bold text-white bg-orange-400 rounded-md border border-orange-500 hover:shadow-md hover:font-extrabold">Cancel</button> */
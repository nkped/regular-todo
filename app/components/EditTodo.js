'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"
import { CancelBtn, AddBtn } from "./Buttons"

export default function EditTodo({ id, title, description }) {

    const [ newTitle, setNewTitle ] = useState(title)
    const [ newDescription, setNewDescription ] = useState(description)
    const router = useRouter()


    const handleUpdate = async(e) => {
        e.preventDefault()
        
        try {
            const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
                method: 'PUT', 
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({newTitle, newDescription})
            })

            if (!res.ok) throw new Error('Oops, update failed. If problem persist, click "cancel" to return to list of todos, which will be unaffected by attemps to update..')
            
            
            router.push('/')
            router.refresh()               
            
        } catch(err) {
            alert(err)
        }
    }
    
    return (
        <form className="flex flex-col gap-3 px-4" onSubmit={handleUpdate}>
            <input 
                className="px-2 py-6 rounded-md border border-slate-300 bg-slate-50 hover:placeholder-slate-300"
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
            <AddBtn />
            <CancelBtn />
        </form>
    )
}

/*             <button type="submit" className="py-4 mt-3 font-bold text-white bg-green-400 rounded-md border border-green-500 hover:shadow-md hover:font-extrabold">Update Todo</button>
            <button href='/' className="py-4 mt-3 font-bold text-white bg-orange-400 rounded-md border border-orange-500 hover:shadow-md hover:font-extrabold">Cancel</button>
 */
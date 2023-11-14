'use client'
import { useState } from "react"
import { useRouter } from "next/navigation"


export default function EditTodo({ id, title, description }) {

    const [ newTitle, setNewTitle ] = useState(title)
    const [ newDescription, setNewDescription ] = useState(description)
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
        <form onSubmit={handleUpdate}>
            <input 
                type="text" 
                placeholder={title} 
                value={newTitle} 
                onChange={(e) => setNewTitle(e.target.value)} 
             />
            <input 
                type="text" 
                placeholder={description} 
                value={newDescription} 
                onChange={(e) => setNewDescription(e.target.value)} 
                />
            <button>Update Todo</button>
        </form>
    )


}
'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";
import { AddBtn, CancelBtn } from "@/app/components/Buttons";

export default function AddTodo() {

    const router = useRouter()
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()

        if ( !title || !description ) {
            alert('You must provide both a title and description')
            return
        }

        try {           
            const res = await fetch('http://localhost:3000/api/topics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }, body: JSON.stringify({title, description})
            })

            if(!res.ok) throw new Error('Hmm, adding new todo failed..')
        }

        catch(err) {
            alert(err)
        }

        router.refresh()
        router.push('/')
    }

    return(
        <div className="w-full h-full" >
            <main className="h-2/4 border" >
            <form className="flex flex-col px-4 text-gray-100" onSubmit={(e) => handleSubmit(e)}>
            
            <input 
                className="px-2 py-6 font-medium placeholder-gray-200 bg-transparent rounded-lg outline-2 outline-green-500 outline-dashed outline-offset-2 hover:outline-offset-0 hover:placeholder-slate-300"
                type="text" 
                placeholder="title.." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />
            <input 
                className="px-2 py-6 mt-6 font-medium placeholder-gray-200 bg-transparent rounded-lg outline-2 outline-green-500 outline-dashed outline-offset-2 hover:outline-offset-0 hover:placeholder-slate-300"
                type="text" 
                placeholder="description.." 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                />
                </form>
            </main>
            <div className="flex flex-col /* h-1/3 */ border" >
                <AddBtn />
                <CancelBtn />
                </div>
                </div>
        
    )
}

/* OLD ADD TODO BTN:
   <button className="py-4 mt-3 font-bold text-white bg-green-400 rounded-md border border-green-500 hover:shadow-md hover:font-extrabold" type="submit">Add Todo</button> */

   /* INPUT OLD:
   className="px-2 py-4 rounded-md border border-slate-300 bg-slate-50 hover:placeholder-slate-300" */
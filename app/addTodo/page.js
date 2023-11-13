'use client'
import { createTopic } from "../lib/fetchTopics";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTodo() {

    const router = useRouter()
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        createTopic(title, description)
        router.push('/')
        router.refresh()
    }

    //console.log('message from addTodo', res)

    return(
        <form className="flex flex-col gap-3 px-4" onSubmit={(e) => handleSubmit(e)}>
            <input 
                className="px-2 py-4 mt-8 rounded-md border border-slate-300 bg-slate-50 hover:placeholder-slate-300"
                type="text" 
                placeholder="Type title here.." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />
            <input 
                className="px-2 py-4 rounded-md border border-slate-300 bg-slate-50 hover:placeholder-slate-300"
                type="text" 
                placeholder="Type description here.." 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                />
            <button className="py-4 mt-3 font-bold text-white bg-green-400 rounded-md border border-green-400 hover:shadow-md" type="submit">Add Todo</button>
        </form>
    )
}
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
        <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="text" 
                placeholder="Type title here.." 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                />
            <input 
                type="text" 
                placeholder="Type description here.." 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                />
            <button type="submit">Add Todo</button>
        </form>
    )
}
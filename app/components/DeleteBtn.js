'use client'
import { HiOutlineTrash } from 'react-icons/hi'
//import { deleteTopic } from "../lib/fetchTopics"
import { useRouter } from "next/navigation";


export default function DeleteBtn({id}) {
    const router = useRouter()

    const handleDelete = async() => {
        console.log('id from handleDelete', id)
        
        const confirmed = confirm('Sure you wish to delete?')

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: 'DELETE'
            }) 
                
            if (res.ok) {
              router.refresh();
            }}
        }

    return(        
            <button onClick={handleDelete}><HiOutlineTrash size={24}/></button>        
    )
}
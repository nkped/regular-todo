'use client'
import { HiOutlineTrash } from 'react-icons/hi'
import { deleteTopic } from "../lib/fetchTopics";
import { useRouter } from "next/navigation";


export default function DeleteBtn({id}) {

    //console.log('id from DeleteBtn', id)

    const router = useRouter()

    const handleDelete = async(e) => {

        e.preventDefault()
        deleteTopic(id)
        router.refresh()
    }

    return(        
            <button onClick={handleDelete}><HiOutlineTrash size={24}/></button>        
    )
}
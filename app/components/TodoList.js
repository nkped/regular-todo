import { HiPencilAlt } from 'react-icons/hi'
import DeleteBtn from './DeleteBtn'
import Link from 'next/link'

const getTopics = async() => {
    const res = await fetch('http://localhost:3000/api/topics', { next: { revalidate: 0 }})
    const topics = await res.json()

    return topics
}

export default async function TodoList() {

    const {topics} = await getTopics()

    return(
        <main className='flex flex-col gap-8'>
            {topics.map((topic) => (
                <div className='flex justify-between pt-3 outline outline-slate-400 outline-e-none' key={topic._id}>
                    <div>
                        <h2>{topic.title}</h2>
                        <p>{topic.description}</p>
                    </div>
                    <div className='flex items-start'>
                     <DeleteBtn id={topic._id}/>
                     <Link href={`http://localhost:3000/edit/${topic._id}`}><HiPencilAlt size={24}/></Link>
                    </div>
                </div>
            ))}
        </main>
    )
}
/* border border-t-0 border-b-0 border-s-4 border-e-0 border-slate-400 */
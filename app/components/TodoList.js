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
        <main className='px-6'>
            {topics.map((topic) => (
                <div className='flex justify-between pt-3' key={topic._id}>
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
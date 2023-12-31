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
<main className='flex flex-col gap-9 divide-y divide-green-700'>
{topics.map((topic) => (
    <div className='flex justify-between pt-6' key={topic._id}>
        <div className='text-white text-opacity-90'>
            <h2 className='text-lg'>{topic.title}</h2>
            <p className='text-sm'>{topic.description}</p>
        </div>
        <div className='flex items-start'>
            <DeleteBtn id={topic._id}/>
            <Link className='text-yellow-500 text-opacity-50 hover:text-yellow-500' href={`http://localhost:3000/edit/${topic._id}`}><HiPencilAlt size={24}/></Link>
        </div>
    </div>
))}
</main>
)
}
/* border border-t-0 border-b-0 border-s-4 border-e-0 border-slate-400 */
/* divide-y divide-green-700 */
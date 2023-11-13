import { HiPencilAlt } from 'react-icons/hi'
import { getTopics } from '../lib/fetchTopics'
import DeleteBtn from './DeleteBtn'


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
                     <DeleteBtn id={topic._id} />
                     <HiPencilAlt size={24}/>
                    </div>
                </div>
            ))}
        </main>
    )
}
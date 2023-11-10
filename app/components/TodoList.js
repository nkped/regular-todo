import { HiPencilAlt } from 'react-icons/hi'
import { HiOutlineTrash } from 'react-icons/hi'
import { fetchTopics } from '../lib/fetchTopics'

export default async function TodoList() {

    const {topics} = await fetchTopics()

    return(
        <>
            {topics.map((topic) => (
                <div key={topic._id}>
                    <h2>{topic.title}</h2>
                    <p>{topic.description}</p>
                </div>
            ))}
        </>
    )
}
import { HiPencilAlt } from 'react-icons/hi'
import { getTopics } from '../lib/fetchTopics'
import DeleteBtn from './DeleteBtn'


export default async function TodoList() {

    const {topics} = await getTopics()

    return(
        <>
            {topics.map((topic) => (
                <div key={topic._id}>
                    <h2>{topic.title}</h2>
                    <p>{topic.description}</p>
                    <DeleteBtn id={topic._id} />
                </div>
            ))}
        </>
    )
}
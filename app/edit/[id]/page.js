import EditTodo from "@/app/components/EditTodo"

const fetchTopicById = async(id) => {
    const res = await fetch(`http:localhost:3000/api/topics/${id}`, { next:{ revalidate: 0 }})
    const {topic} = await res.json()

    return topic
}


export default async function editTodoPage({ params: { id} }) {

    const { title, description } = await fetchTopicById(id)

    return(
        <EditTodo id={id} title={title} description={description} />
    )
}
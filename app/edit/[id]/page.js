import EditTodo from "@/app/components/EditTodo"

const fetchTopicById = async(id) => {
    const res = await fetch(`http:localhost:3000/api/topics/${id}`, { next:{ revalidate: 0 }})
    const {topic} = await res.json()
    console.log('topic from fetch function', topic)
    return topic
}


export default async function editTodoPage({ params: { id} }) {
    console.log('id from editpage:', id)
    const { title, description } = await fetchTopicById(id)

    return(
        <EditTodo id={id} title={title} description={description} />
           )
}
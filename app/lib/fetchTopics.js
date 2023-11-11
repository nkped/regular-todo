

export async function getTopics() {
    const res = await fetch('http://localhost:3000/api/topics', { next: { revalidate: 0 }})
    const topics = await res.json()

    return topics
 }


export async function createTopic(title, description) {

    const res = await fetch('http://localhost:3000/api/topics', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({title, description})
    })

    return await res.json()
}


export async function deleteTopic(id) {
    console.log('id from delete fetch', id)
    const res = await fetch('http://localhost:3000/api/topics', {
        method: 'DELETE', 
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({id})
    })

    return await res.json()
}

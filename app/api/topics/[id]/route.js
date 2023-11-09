import Topic from "@/models/topic";
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";



export async function GET(request, { params: { id }}) {
    console.log('id from getbyid route', id)
    connectMongoDB()
    const topic = await Topic.findById(id)
    console.log('topic from getone route: ', topic)

    return NextResponse.json({topic}, {status: 200})
}


export async function PUT(request, { params: { id }}) {
    const { newTitle: title, newDescription: description } = await request.json() 
    console.log('title, description from put route', title, description)
    connectMongoDB()
    await Topic.findByIdAndUpdate(id, { title, description })
        
    return NextResponse.json({status: 200}) 
}




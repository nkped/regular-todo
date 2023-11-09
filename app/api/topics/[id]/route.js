import Topic from "@/models/topic";
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";



export async function GET(request, { params: { id }}) {
    console.log('id from getbyid route', id)
    connectMongoDB()
    const topic = await Topic.findById(id)
    //const topic = res.json()
    console.log('topic from getone route: ', topic)

    return NextResponse.json({status: 200})


}




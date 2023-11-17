import Topic from "@/models/topic"
import connectMongoDB from "@/lib/mongodb"
import { NextResponse } from "next/server"


export async function GET() {
    console.log('get req called from from api route..')
    connectMongoDB()
    const topics = await Topic.find() 

    return NextResponse.json({topics})
}


export async function POST(request) {
    const { title, description } = await request.json()
    console.log('title, description from post route', title, description)
    connectMongoDB()
    const res = await Topic.create({ title, description })
    console.log('post res from api route', res)

    return NextResponse.json({status: 201})    
}


export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id')
   
    await connectMongoDB()
    await Topic.findByIdAndDelete(id)

    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}
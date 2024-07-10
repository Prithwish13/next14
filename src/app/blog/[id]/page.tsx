"use client"
import { useParams } from "next/navigation"

export default function BlogDetails () {

    const params = useParams<{
        id: string
    }>()

    return( 
        <h1>This is the {params.id} blog details page</h1>
    )
}
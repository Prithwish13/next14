import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    title: 'Profile'
}

export default function About() {
    return( <> 
      <h1>Profile page</h1>

      <Link href="/">Home</Link>
    </>)  
}
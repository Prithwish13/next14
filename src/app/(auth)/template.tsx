"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"


const navLinks = [
    {
        name: "Register",
        href: "/register"
    },
    {
        name: "Login",
        href: "/login"
    },
    {
        name: "Forgot Password",
        href: "/forgot-password"
    }
]

export default function AuthMainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode
  }>) {
    const pathname = usePathname()
    const [input, setInput] = useState('')
    return (
     <div>
       <div>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
       </div>
        <div  className="flex gap-2">
        {
        navLinks.map(elm => {
            const isActive = pathname.startsWith(elm.href)
            return(
            <Link 
             key={elm.name} 
             href={elm.href}
             className={`${isActive ? "font-bold" : "text-blue-500"}`}
             >{elm.name}</Link>)}
        )
       }
        </div>
      
        {children}
      </div>
    )
  }

  

  
  
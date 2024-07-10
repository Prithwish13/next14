"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"


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
    return (
     <div>
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

  

  
  
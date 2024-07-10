"use client"
import { useRouter } from "next/navigation"


export default function OrderProduct() {
    const router = useRouter()
    const handleClick = () => {
        console.log("placing your order")
        router.push("/")
    }

    return(
        <>
        <h1>Order product</h1>
        <button
        onClick={handleClick}
         className="px-4 py-2 bg-amber-600 text-white"
        >Place Order</button>
        </>
    )
}
import Link from "next/link";

export default function Blog() {
    return (
    <div>
        <h1>My blog</h1>
        <ul>
            <li><Link href='/blog/blog1'>Blog 1</Link></li>
            <li><Link href='/blog/blog2'>Blog 2</Link></li>
            <li><Link href='/blog/blog3' replace>Blog 3</Link></li>
            <li><Link href='/blog/blog4'>Blog 4</Link></li>
        </ul>
    </div>
      
)
}
import Link from "next/link";

export default function ProductPage() {

    return(
        <div>
            <ul>
                <li>
                    <Link href="/product/product1">Product 1</Link>
                </li>
                <li>
                    <Link href="/product/product2">Product 2</Link>
                </li>
                <li>
                    <Link href="/product/product3">Product 3</Link>
                </li>
            </ul>
        </div>
    )
} 
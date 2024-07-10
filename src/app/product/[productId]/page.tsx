export default function ProductDetails({params}: {
    params: {
        productId: string
    }
}) {
    
    return(
        <h1>Displaying the details of {params.productId}</h1>
    )
}
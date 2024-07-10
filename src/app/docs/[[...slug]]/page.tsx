

export default function Docs({params} : {
    params: {
        slug: string[]
    }
}) {

    if(params.slug?.length === 2) {
        return <h1>This is the docs {params.slug[0]} {params.slug[1]} </h1>
    }
    
    if(params.slug?.length === 1 ){
        return <h1>this is the docs {params.slug[0]}</h1>
    }

    return <h1>This is the docs page</h1>
}
import {Metadata} from 'next'

type Props = {
    params: {
        id: string
    }
}
export const generateMetadata = async({params}: Props): Promise<Metadata> => {
    const title: string = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(`ipad ${params.id}`)
        }, 1000)
    })

    return {
        title: title
    }
}

export default function BlogDetails ( {params}: Readonly<Props>) {

    return( 
        <h1>This is the {params.id} blog details page</h1>
    )
}
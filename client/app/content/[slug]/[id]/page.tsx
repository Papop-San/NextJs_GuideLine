export default function page( {params}: any) {
    return(
        <div>
            Slug: {params.slug} {params.id}
        </div>
    )
}
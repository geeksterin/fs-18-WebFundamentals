export default function Quote({content,author})
{
    return (
        <div className="text-center">
            <h1>{content}</h1>
            <p>{author}</p>
        </div>
    )
}
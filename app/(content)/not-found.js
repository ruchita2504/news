
export default function NotFoundPage({error}) {
    return (
        <div id="error">
            <h1>Not Found!</h1>
            <p>error while finding data found.</p>
            <p>{error.message}</p>
        </div>
    )
}
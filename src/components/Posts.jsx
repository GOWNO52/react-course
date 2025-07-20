import { Link } from "react-router-dom"
import { posts } from "../mock-data/posts"

const Posts = () => {
    return (
        <div>
            <ul>
                {posts.map(post => (
                    <li>
                        <Link to={`/posts/${post.id}`}>
                        <button>GO to {post.title}</button>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Posts
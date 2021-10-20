import { useParams, Link } from "react-router-dom";

function PostFull() {
    const { postId } = useParams();
    console.log({postId});
    const comments = require("../comments.json");
    const posts = require("../posts.json");
    console.log(comments);
    const post = posts.filter(post => post.id == postId)[0];

    return(
        <div>
            <header className="App-header">
                <Link to={`/`}>
                    <h6>Back to home</h6>
                </Link>
                <h4>Post number {postId}</h4>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <Link to={`/author/${post.userId}`}>
                    <h4>by {post.userId}</h4>
                </Link>
                
            </header>
            
            <div>
                <h3>Comments</h3>
                {comments.filter(comment => comment.postId == postId).map(filteredComment => (
                    <div className="blogCard">
                        <h3>{filteredComment.name}</h3>
                        <h5>by {filteredComment.email}</h5>                        
                        <p>{filteredComment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PostFull;
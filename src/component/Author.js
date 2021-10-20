import { useParams, Link } from "react-router-dom";

function Author() {
    const { authorId } = useParams();
    console.log({authorId});
    const data = require("../posts.json");
    console.log(data);

    return(
        <div>
            <header className="App-header">
                <Link to={`/`}>
                    <h6>Back to home</h6>
                </Link>
                <h1>{authorId}'s Blogs</h1>
            </header>
            
            <div>
                 {data.filter(post => post.userId == authorId).map(filteredPost => (
                    <div className="blogCard">
                        <Link to={`/post/${filteredPost.id}`}>
                           <h4>{filteredPost.title}</h4>
                        </Link>

                        <p>{filteredPost.body}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Author;
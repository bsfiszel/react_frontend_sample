import { Link } from "react-router-dom";

function Summaries() {
    const data = require("../posts.json");
    // console.log(data[0]);
    var authorIds = [];
    var featPosts = [];
    data.reverse().map((post) => {
        if(authorIds.indexOf(post.userId)=== -1) {
            authorIds.push(post.userId);
            featPosts.push(post);
        }
        return 0;
    });

    return(
        <div>
            <header className="App-header">
                <h1>Levvel's Blogs</h1>
                <h6>Check out featured posts below <br /> Click on Author for more posts <br /> Click on Title to view comments</h6>
            </header>
            
            <div>
                {featPosts.reverse().map((post) => (
                    <div className="blogCard">
                        <Link to={`/post/${post.id}`}>
                           <h4>{post.title}</h4>
                        </Link>

                        <Link to={`/author/${post.userId}`}>
                            <h4>by {post.userId}</h4>
                        </Link>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
        

    );
}

export default Summaries;
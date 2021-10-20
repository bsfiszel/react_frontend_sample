import { useParams, Link } from "react-router-dom";

// function getAuthorPosts(authorId) {
//     return fetch("https://jsonplaceholder.typicode.com/users/"+authorId+"/posts")
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         return data;
//     }).catch(error => console.warn(error));
// }

function Author() {
    const { authorId } = useParams();

    // .then(response => console.log(response));

    // console.log(json);

    console.log({authorId});
    const data = require("../posts.json");
    console.log(data);
    // var authorPosts = [];
    // data.map(post => {
    //     if(post.userId == {authorId}) {
    //         authorPosts.push(post);
    //     }
    //     return "";
    // });
    // console.log(authorPosts);



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
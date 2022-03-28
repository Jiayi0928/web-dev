import PostItems from "./PostItems";
import post from "./allposts.json";

const PostList = () => {
    return (
        <ul className="list-group">
        {post.map( post => {return (<PostItems item={post}/>);

        })}
        </ul>
    );
}
export default PostList;
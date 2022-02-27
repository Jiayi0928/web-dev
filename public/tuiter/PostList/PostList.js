import PostItems from "./PostItems.js";
import allposts from "./allposts.js";

const PostList = () => {
    return (`
        <div class="list-group">
        ${
        allposts.map( post => {
            return (PostItems(post));
        }).join('')
    }
        </div>
    `);
}
export default PostList;
const PostSummaryItem = (post) =>{
    return (`
    <li class="list-group-item">
        <div class="row">
        <div class="wd-section">
            <div class="wd-section-left ">
                <p>
                    <span class="wd-grey">${post.topic}</span></br>
                    <span class="fw-bold">${post.userName} <i class="fa fa-check-circle"></i></span>
                    <span class="wd-grey">  &nbsp;- ${post.time}</span></br>
                    <span class="fw-bold">${post.title}</span>
                </p>
                
            </div>
            <div class="wd-right">
                <img class="wd-pic"src=${post.image}>
            </div>
        </div>
        </div>
    </li>   
    `);
}
export default PostSummaryItem;
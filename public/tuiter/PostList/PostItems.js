const PostItems = (item) =>{

    if(item.tile == "" || item.content === "" || item.url == ""){
    return(`
    <li class="list-group-item">

    <div class="mt-2 wd-section">
        <div class="wd-section-left ms-0">
            <img class="wd-profile" src=${item.img}>
        </div>
    
        <div class="wd-post ps-2">
            <p>
                <span class="fw-bold wd-white">${item.username} <i class="fa fa-check-circle"></i></span>
                <span class="wd-grey">${item.handleplustime}</span></br>
                <span class="">${item.topic}</span>
            </p>  
            
            <div class="wd-border-pic">
                <img class="wd-none-pic" src=${item.pic}>
            </div>
            
            <div class="row">
                <div class="col-3 mt-1">
                    <i class="fa fa-comment-o wd-grey"></i>
                    <span class="wd-grey ms-1">${item.comment}</span>
                </div>
                <div class="col-3 mt-1">
                    <i class="fa fa-retweet wd-grey"></i>
                    <span class="wd-grey ms-0">${item.retweet}</span>
                </div>
                <div class="col-4 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3">
                    <i class="fa fa-heart wd-grey"></i>
                    <span class="wd-grey">${item.like}</span>
                </div>
                <div class="col-2 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3 ">
                    <i class="fa fa-share wd-grey"></i>
                </div>           
            </div>            
        </div>
        
        <div class="wd-dot">
            <i class="wd-grey fa fa-ellipsis-h"></i>
        </div>       
    </div>
    </li>
    
    `);}else{
        return(`
    <li class="list-group-item">

    <div class="mt-2 wd-section">
        <div class="wd-section-left ms-0">
            <img class="wd-profile" src=${item.img}>
        </div>
    
        <div class="wd-post ps-2">
            <p>
                <span class="fw-bold wd-white">${item.username} <i class="fa fa-check-circle"></i></span>
                <span class="wd-grey">${item.handleplustime}</span></br>
                <span class="">${item.topic}</span>
            </p>  
            
            <div class="wd-border-pic">
                <img class="wd-news-pic" src=${item.pic}>
                <p class="ms-2 mt-2">
                    <span>${item.title}</span></br>
                    <span class="wd-grey">${item.content}</span></br>
                    <span class="wd-grey">${item.url}</span>
                </p>
            </div>
            
            <div class="row">
                <div class="col-3 mt-1">
                    <i class="fa fa-comment-o wd-grey"></i>
                    <span class="wd-grey ms-1">${item.comment}</span>
                </div>
                <div class="col-3 mt-1">
                    <i class="fa fa-retweet wd-grey"></i>
                    <span class="wd-grey ms-0">${item.retweet}</span>
                </div>
                <div class="col-4 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3">
                    <i class="fa fa-heart wd-grey"></i>
                    <span class="wd-grey">${item.like}</span>
                </div>
                <div class="col-2 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3 ">
                    <i class="fa fa-share wd-grey"></i>
                </div>               
            </div>           
        </div>
        
        <div class="wd-dot">
            <i class="wd-grey fa fa-ellipsis-h"></i>
        </div>       
    </div>
    </li>
    
    `);
    }
}
export default PostItems;
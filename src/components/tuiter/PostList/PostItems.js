const PostItems = ({item= {
        "img": "/tuiter/images/newyorkpost.jpeg",
        "username": "New York Post",
        "handleplustime": "@nypost · 23h",
        "topic": "Grimes seen reading Karl Marx following split with world's richest man Elon Musk",
        "pic": "/tuiter/images/newyorkpostnews.jpeg",
        "title": "",
        "content": "",
        "url": "",
        "comment": "965",
        "retweet": "2.4K",
        "like": "4k"}}) =>{
    return(
        <li className="list-group-item">

            <div className="mt-2 wd-section">
                <div className="wd-section-left ms-0">
                    <img className="wd-profile" src={item.img} alt=""/>
                </div>

                <div className="wd-post ps-2">
                    <p>
                        <span className="fw-bold wd-white">{item.username} <i className="fa fa-check-circle"/></span>
                        <span className="wd-grey"> {item.handleplustime}</span><br/>
                    <span dangerouslySetInnerHTML={{__html:item.topic}}/>
                </p>

                <div className="wd-border-pic">
                    {item.title && item.content && item.url ?
                        <img className="wd-news-pic" src={item.pic} alt=""/>:<img className="wd-none-pic" src={item.pic} alt=""/>}

                    {item.title && item.content && item.url ?
                        <p className="ms-2 mt-2">
                            {item.title ? <p>{item.title}</p>: ""}
                            {item.content ? <p className="wd-grey">{item.content}</p>: ""}
                            {item.url ? <span dangerouslySetInnerHTML={{__html:item.url}}/> :""}
                        </p>:""
                    }

            </div>

            <div className="row">
                <div className="col-3 mt-1">
                    <i className="fa fa-comment wd-grey"/>
                    <span className="wd-grey ms-1"> {item.comment}</span>
                </div>
                <div className="col-3 mt-1">
                    <i className="fa fa-retweet wd-grey"/>
                    <span className="wd-grey ms-0"> {item.retweet}</span>
                </div>
                <div className="col-4 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3">
                    <i className="fa fa-heart wd-grey"/>
                    <span className="wd-grey"> {item.like}</span>
                </div>
                <div className="col-2 mt-1 col-xxl-3 col-xxl-3 col-xl-3 col-lg-3 ">
                    <i className="fa fa-share wd-grey"/>
                </div>
            </div>
        </div>

        
        <div className="wd-dot">
            <i className="wd-grey fa fa-ellipsis-h"/>
        </div>       
    </div>
    </li>
    
    );
    }

export default PostItems;
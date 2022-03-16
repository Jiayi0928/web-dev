const NavigationSidebar = (active) => {
    return(`
        <div class="list-group">
            <a href="#" class="list-group-item list-group-item-action "><i class="fa fa-brands fa-twitter"></i></a>
            
            ${active === 'home' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item list-group-item-action">`}
            <a href="../HomeScreen/home.html" class="list-group-item-action text-decoration-none">
            <div class="row"><div class="col-1"> <i class="fa fa-home"></i> </div>
            <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Home</div></div>
            </a>
            </li>
            
            ${active === 'explore' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item list-group-item-action">`}
            <a href="../ExploreScreen/explore.html" class="list-group-item-action text-decoration-none">
            <div class="row"><div class="col-1"><i class="fa fa-hashtag"></i></div>
            <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Explore</div></div>
            </a>
            </li>
            
            ${active === 'notifications' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item list-group-item-action">`}
            <a href="notifications.html" class="list-group-item-action text-decoration-none" >
            <div class="row"><div class="col-1"><i class="fa fa-bell"></i></div>
            <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Notifications</div></div></a>
            </li>
            
            ${active === 'messages' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item list-group-item-action">`}
            <a href="messages.html" class="list-group-item-action text-decoration-none" >
            <div class="row"><div class="col-1"><i class="fa fa-envelope"></i></div>
            <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Messages</div></div></a>
            </li>
            
            ${active === 'bookmarks' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item list-group-item-action">`}
            <a href="../bookmarks.html" class="list-group-item-action text-decoration-none" >
            <div class="row"><div class="col-1"><i class="fa fa-bookmark"></i></div>
            <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Bookmarks</div></div></a>
            </li>
            
            ${active === 'lists' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item list-group-item-action">`}
            <a href="lists.html" class="list-group-item-action text-decoration-none" >
            <div class="row"><div class="col-1"><i class="fa fa-list-ul"></i></div>
            <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Lists</div></div></a>
            </li>
            
            ${active === 'profile' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item list-group-item-action">`}
            <a href="../profile.html" class="list-group-item-action text-decoration-none" >
            <div class="row"><div class="col-1"><i class="fa fa-user"></i></div>
            <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Profile</div></div></a>
            </li>
            
            ${active === 'more' ? `<li class="list-group-item list-group-item-action active">` : `<li class="list-group-item list-group-item-action">`}
            <a href="more.html" class="list-group-item-action text-decoration-none">
            <div class="row">
                <span class="fa-stack fa-1x" >
                    <i class="fa fa-circle fa-stack-1x"></i>
                    <i class="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    <div class="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none ms-4">  More</div>
                </span>
                    </div></a>
            </li>
            </div>
                      
            <div class="d-grid mt-2">
                <a href="tweet.html" class="btn btn-primary btn-block rounded-pill">
                Tweet</a> 
            </div>
       
    `);
}
export default NavigationSidebar;
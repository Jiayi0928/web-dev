import NavigationSidebar from "../NavigationSidebar/NavigationSidebar.js";
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
import postList from "../PostList/PostList.js";
(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2">
        <div class="col-2 col-lg-1 col-xl-2">
            ${NavigationSidebar('home')} 
        </div>      
        <div class="col-10 col-lg-6 col-xl-6">
        ${postList()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-5 col-xl-4 col-xxl-4 d-none">
            ${PostSummaryList()} 
        </div>
        </div>        
    `);
})($);
import PostSummaryList from "../PostSummaryList/PostSummaryList.js";
const ExploreComponent = () => { return(`
<div class="row">
<!-- search field and cog -->
    <div class="wd-search wd-search-div p-3">
        <i class="fa fa-search wd-search-icon"></i>
        <input type="text" placeholder="Search Tuiter">
            <div class="wd-gear">
                <i class="fa fa-cog wd-gear-icon"></i>
            </div>
    </div>
</div>

<ul class="nav mb-2 nav-tabs">
<!-- tabs --> 
    <li class="nav-item">
        <a class="nav-link active wd-nav-link-override2" href="for-you.html">For you</a>
    </li>
    <li class="nav-item">
        <a class="nav-link wd-nav-link-override2" href="trending.html">Trending</a>
    </li>
    <li class="nav-item">
        <a class="nav-link wd-nav-link-override2" href="news.html">News</a>
    </li>
    <li class="nav-item">
        <a class="nav-link wd-nav-link-override2" href="sports.html">Sports</a>
    </li>
    <li class="nav-item d-xxl-block d-xl-block d-lg-block d-sm-none d-none">
        <a class="nav-link wd-nav-link-override2" href="entertainment.html">Entertainment</a>
    </li>
</ul>

<!-- image with overlaid text -->
<div class="wd-center-border wd-img-container">
    <img class="wd-img" src="https://static.tweaktown.com/news/8/4/84438_01_elon-musk-giving-update-on-spacexs-starship-mars-rocket-thursday.jpg">
    <div class="wd-img-title">SpaceX's Starship</div>
</div>

${PostSummaryList()} `);
}
export default ExploreComponent;
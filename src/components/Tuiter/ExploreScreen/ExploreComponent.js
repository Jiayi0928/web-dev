import PostSummaryList from "../PostSummaryList/PostSummaryList";
import React from "react";
const ExploreComponent = () => { return(
    <div>
        <div clasName="row">
            <div className="wd-search wd-search-div p-3">
                <i className="fa fa-search wd-search-icon"></i>
                <input type="text" placeholder="Search Tuiter"/>
                <div className="wd-gear">
                    <i className="fa fa-cog wd-gear-icon"></i>
                </div>
            </div>
        </div>

<ul className="nav mb-2 nav-tabs">

    <li className="nav-item">
        <a className="nav-link active wd-nav-link-override2" href="for-you.html">For you</a>
    </li>
    <li className="nav-item">
        <a className="nav-link wd-nav-link-override2" href="trending.html">Trending</a>
    </li>
    <li className="nav-item">
        <a className="nav-link wd-nav-link-override2" href="news.html">News</a>
    </li>
    <li className="nav-item">
        <a className="nav-link wd-nav-link-override2" href="sports.html">Sports</a>
    </li>
    <li className="nav-item d-xxl-block d-xl-block d-lg-block d-sm-none d-none">
        <a className="nav-link wd-nav-link-override2" href="entertainment.html">Entertainment</a>
    </li>
</ul>


<div className="wd-center-border wd-img-container">
    <img className="wd-img" src="https://static.tweaktown.com/news/8/4/84438_01_elon-musk-giving-update-on-spacexs-starship-mars-rocket-thursday.jpg"/>
    <div className="wd-img-title">SpaceX's Starship</div>
</div>

<PostSummaryList/>
    </div>);
}
export default ExploreComponent;
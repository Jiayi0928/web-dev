import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import ExploreComponent from "./ExploreComponent";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList";
import React from "react";
import WhatsHappening from "../HomeScreen/whats-happening";
import TuitList from "../tuit-list";
const ExploreScreen = () =>{
    return(
        <div className="row mt-2">
        <TuitList/>
        </div>
    );
};
export default ExploreScreen;
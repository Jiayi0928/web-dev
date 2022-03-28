import NavigationSidebar from "../NavigationSidebar/NavigationSidebar";
import React from "react";
import PostList from "../PostList/PostList";
import PostSummaryList from "../PostSummaryList/PostSummaryList";
import TuitList from "../tuit-list";
import WhatsHappening from "./whats-happening";

const HomeScreen = () =>{
    return (
        <div className="row mt-2">
            <WhatsHappening/>
            <TuitList/>
        </div>
    );
};
export default HomeScreen;

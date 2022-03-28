import React from "react";
import {Link}from "react-router-dom";

const NavigationSidebar = ({active='/'}) => {
    return(
        <>
        <div className="list-group">
            <Link to="/" className="list-group-item list-group-item-action "><i className="fa fa-brands fa-twitter"/></Link>

            <Link to="/tuiter/" className={`list-group-item-action text-decoration-none list-group-item list-group-item-action ${active==='/'?'active':''}`}>
            <div className="row"><div className="col-1"> <i className="fa fa-home"></i> </div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Home</div></div>
            </Link>

            <Link to="/tuiter/explore" className={`list-group-item-action text-decoration-none list-group-item list-group-item-action ${active==='explore'?'active':''}`}>
            <div className="row"><div className="col-1"><i className="fa fa-hashtag"></i></div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Explore</div></div>
            </Link>

            <Link to="/" className={`list-group-item-action text-decoration-none list-group-item list-group-item-action ${active==='notifications'?'active':''}`}>
            <div className="row"><div className="col-1"><i className="fa fa-bell"></i></div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Notifications</div></div></Link>
            

            <Link to="/" className={`list-group-item-action text-decoration-none list-group-item list-group-item-action ${active==='messages'?'active':''}`}>
            <div className="row"><div className="col-1"><i className="fa fa-envelope"></i></div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Messages</div></div></Link>


            <Link to="/" className={`list-group-item-action text-decoration-none list-group-item list-group-item-action ${active==='bookmarks'?'active':''}`}>
            <div className="row"><div className="col-1"><i className="fa fa-bookmark"></i></div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Bookmarks</div></div></Link>

            <Link to="/" className={`list-group-item-action text-decoration-none list-group-item list-group-item-action ${active==='lists'?'active':''}`}>
            <div className="row"><div className="col-1"><i className="fa fa-list-ul"></i></div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Lists</div></div></Link>

            <Link to="/" className={`list-group-item-action text-decoration-none list-group-item list-group-item-action ${active==='profile'?'active':''}`}>
            <div className="row"><div className="col-1"><i className="fa fa-user"></i></div>
            <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none">Profile</div></div></Link>
            

            <Link to="/" className={`list-group-item-action text-decoration-none list-group-item list-group-item-action ${active==='more'?'active':''}`}>
            <div className="row">
                <span className="fa-stack fa-1x" >
                    <i className="fa fa-circle fa-stack-1x"></i>
                    <i className="fa fa-ellipsis-h fa-stack-1x fa-inverse"></i>
                    <div className="col-xxl-10 col-xl-10 d-xl-block d-lg-none d-md-none d-sm-none d-none ms-4">  More</div>
                </span>
                    </div></Link>
            </div>
                      
            <div className="d-grid mt-2">
                <Link to="/" className="btn btn-primary btn-block rounded-pill">
                Tweet</Link>
            </div>

                                        </>
       
    );
}
export default NavigationSidebar;
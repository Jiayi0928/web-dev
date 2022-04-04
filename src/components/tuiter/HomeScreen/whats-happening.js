import React, {useState} from "react";
import {useDispatch}from "react-redux";

import{createTuit} from "../../actions/tuits-actions";

const WhatsHappening = () => {

    const [newTuit, setNewTuit] =
        useState({tuit: 'New tuit'});

    const dispatch = useDispatch();

    return ( <>
        <div className="d-flex">
            <img src="/tuiter/images/elonmusk.jpeg" alt="" className="wd-profile"/>
            <textarea className="wd-textarea ms-2 form-control" placeholder="What's happening?" onChange={(e) =>
                setNewTuit({...newTuit,
                    tuit: e.target.value})}>
            </textarea>
        </div>
        <div className="d-flex">
                <div className="wd-blue row d-inline mt-3">
                    <a href="#"><i className="fa fa-image"/></a>
                    <a href="#"><i className="fa fa-chart-line"/></a>
                    <a href="#"><i className="fa fa-smile"/></a>
                    <a href="#"><i className="fa fa-calendar"/></a>
                </div>

                <div className="wd-tweet mt-2 mb-3">
                    <button className="btn btn-primary btn-block rounded-pill " onClick={() =>
                        createTuit(dispatch, newTuit)}> Tuit </button>
                </div>
            </div>



    </> );
}
export default WhatsHappening;
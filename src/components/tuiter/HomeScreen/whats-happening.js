import React, {useState} from "react";
import {useDispatch}from "react-redux";
const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening]
        = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return ( <>
        <div className="d-flex">
            <img src="/tuiter/images/elonmusk.jpeg" alt="" className="wd-profile"/>
            <textarea className="wd-textarea ms-2" placeholder="What's happening?" value={whatsHappening} onChange={(event) =>
                setWhatsHappening(event.target.value)}>
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
                    <button className="btn btn-primary btn-block rounded-pill " onClick={tuitClickHandler}> Tweet </button>
                </div>
            </div>



    </> );
}
export default WhatsHappening;
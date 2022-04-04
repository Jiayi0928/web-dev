import {useDispatch} from "react-redux";
import {deleteTuit} from "../../actions/tuits-actions";
import TuitStats from "./tuit-stats";
const TuitListItem = ({tuit}) => {
    const dispatch = useDispatch();

    return(

        <>
            <li className="list-group-item d-flex">
                <div>
                    <img className="wd-profile" src={tuit.avatar_image}/>
                </div>

                <div>
                <span className="fw-bold ms-2">{tuit.postedBy.username}</span>
                <span className="wd-grey"> @{tuit.handle}</span>
                    <i onClick={() => deleteTuit(dispatch,tuit)} className="fas fa-remove float-end"/>
                <p className="ms-2">{tuit.tuit}</p>
                    {tuit.attachments && tuit.attachments.image &&
                        <img className="wd-tuit-list-pic" src={tuit.attachments.image} alt=""/>
                    }
                    {tuit.attachments && tuit.attachments.video &&
                        <iframe height="350px" className="wd-tuit-list-pic" src={'https://www.youtube.com/embed/' + tuit.attachments.video}/>
                    }
                    <TuitStats tuit={tuit}/>
                </div>



            </li>

        </>
);
}
export default TuitListItem;
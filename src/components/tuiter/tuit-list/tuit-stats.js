import {useDispatch} from "react-redux";
import {updateTuit} from "../../actions/tuits-actions";
const TuitStats = ({tuit}) => { const dispatch = useDispatch();
    const likeTuit = () => {
    dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="row">
            <span className="col-3">
            <i className="far fa-comment"/>
            {tuit.stats && tuit.stats.comments}
            </span>

            <span className="col-3">
                <i className="fa fa-retweet"/>
                <span>{tuit.stats.retuits}</span>
            </span>

            <span className="col-3">

                {

                    tuit.liked &&
                    <i className="fa-solid fa-thumbs-up"
                    onClick={() => updateTuit(dispatch, {
                            ...tuit,
                            liked: false,
                            stats: {
                                comments: tuit.stats.comments,
                                retuits: tuit.stats.retuits,
                                likes: tuit.stats.likes - 1,
                                dislikes: tuit.stats.dislikes
                            }
                        }
                    )}>

                    </i>
                }

                {
                    !tuit.liked &&
                    <i className="fa-regular fa-thumbs-up"
                       onClick={() => updateTuit(dispatch, {
                               ...tuit,
                               liked: true,
                               stats: {
                                   comments: tuit.stats.comments,
                                   retuits: tuit.stats.retuits,
                                   likes: tuit.stats.likes + 1,
                                   dislikes: tuit.stats.dislikes
                               }
                           }
                    )}>

                    </i>
                }{tuit.stats && tuit.stats.likes}

                {

                    tuit.disliked &&
                    <i className="fa-solid fa-thumbs-down ms-3"
                       onClick={() => updateTuit(dispatch, {
                               ...tuit,
                               disliked: false,
                               stats: {
                                   comments: tuit.stats.comments,
                                   retuits: tuit.stats.retuits,
                                   likes: tuit.stats.likes,
                                   dislikes: tuit.stats.dislikes -1
                               }
                           }
                       )}>

                    </i>
                }

                {
                    !tuit.disliked &&
                    <i className="fa-regular fa-thumbs-down ms-3"
                       onClick={() => updateTuit(dispatch, {
                               ...tuit,
                               disliked: true,
                               stats: {
                                   comments: tuit.stats.comments,
                                   retuits: tuit.stats.retuits,
                                   likes: tuit.stats.likes,
                                   dislikes: tuit.stats.dislikes+1
                               }
                           }
                       )}>

                    </i>
                }

                {tuit.stats && tuit.stats.dislikes}
            </span>

            <span className="col-3">
                <i className="fas fa-share me-2"/>
            </span>
        </div>
            );


}
export default TuitStats;
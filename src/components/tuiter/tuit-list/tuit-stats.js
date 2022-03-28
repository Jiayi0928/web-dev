import {useDispatch} from "react-redux";
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

            <span className="col-3" onClick={likeTuit}> {
                tuit.liked &&
                <i className="fas fa-heart me-1" style={{color: 'red'}}/> }
                {
                    !tuit.liked &&
                    <i className="far fa-heart me-1"/>
                }
                {tuit.stats && tuit.stats.likes}
            </span>

            <span className="col-3">
                <i className="fas fa-share me-2"/>
            </span>
        </div>
            );


}
export default TuitStats;
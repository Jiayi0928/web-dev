const WhoToFollowListItem = ({
    who = {
        avatarIcon: '/tuiter/images/virgin.jpeg',
        userName: 'Virgin Galactic',
        handle: 'virgingalactic',
    }
                             }) => {
    return (
        <>
        <li className="list-group-item wd-user-follow">
            <div className="row">
                <div className="col-xxl-2 col-xl-2 col-lg-2 mt-1 ps-1">
                    <img src={who.avatarIcon} className="wd-profile"/>
                </div>
                
                <div className="col-xxl-6 col-xl-6 col-lg-6 mt-1 ms-1">
                    <span>
                        <span className="fw-bold">{who.userName}
                        <i className="fa fa-check-circle"/></span>
                        <br/>
                        <span>@{who.handle}</span>
                    </span>
                </div>
                
                <div className="col-xxl-2 col-xl-2 col-lg-2">
                    <button className="btn btn-primary rounded-pill mt-2">Follow</button>
                </div>
            </div>
        </li>
        </>
        );
}
export default WhoToFollowListItem;
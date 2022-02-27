const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item wd-user-follow">
            <div class="row">
                <div class="col-xxl-2 col-xl-2 col-lg-2 mt-1 ps-1">
                    <img src=${who.avatarIcon} class="wd-profile">
                </div>
                
                <div class="col-xxl-6 col-xl-6 col-lg-6 mt-1 ms-1">
                    <p>
                        <span class="fw-bold">${who.userName} 
                        <i class="fa fa-check-circle"></i></span>
                        </br>
                        <span>@${who.handle}</span>                    
                    </p>    
                </div>
                
                <div class="col-xxl-2 col-xl-2 col-lg-2">
                    <button class="btn btn-primary rounded-pill mt-2">Follow</button>
                </div>
            </div>
        </li>
        `);
}
export default WhoToFollowListItem;
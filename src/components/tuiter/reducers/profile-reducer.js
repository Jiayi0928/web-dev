import profile from '../data/profile.json';

const profileReducer = (state = profile, action) => {
    switch(action.type){
        case 'edit':
            return {...profile,...action.profile};
        default:
            return profile;
    }
};

export default profileReducer;
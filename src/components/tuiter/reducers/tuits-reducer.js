import {FIND_ALL_TUITS, DELETE_TUIT,CREATE_TUIT} from "../../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case CREATE_TUIT:
            return [
                ...state,
                action.newTuit
            ];
        case FIND_ALL_TUITS:
            return action.tuits;
        case DELETE_TUIT:
            return state.filter(
                tuit => tuit._id !== action.tuit._id);
        default:
            return state;
    }
}
export default tuitsReducer;
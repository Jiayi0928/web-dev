const tuitsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FIND_ALL_TUITS':
            return action.tuits;
        default:
            return state;
    }
}
export default tuitsReducer;
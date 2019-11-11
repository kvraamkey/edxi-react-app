
const INTITIAL_STATE = {
    name : "Home Page"
};

export const HomeReducer = (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case "GET_PAGE_NAME":
            return state.name;
        case "SET_PAGE_NAME":
            return state + action.payload
        default :
            return state;
    }
}
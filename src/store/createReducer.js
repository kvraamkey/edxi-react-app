import produce from "immer";

const createReducer = (cases = {}, defaultState = {}) => {
    return (state = defaultState, action) => {
        return produce(state, draft => {
            if (action && action.type && cases[action.type] instanceof Function) {
                cases[action.type](draft, action.payload);
            }
        });
    };
}

export default createReducer;
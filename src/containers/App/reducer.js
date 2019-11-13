import createReducer from "store/createReducer";

const INTITIAL_STATE = {
    name: "sample reducer",
    count: 0
};

export const countReducer = createReducer({
    INCREMENT: (draft, payload) => {
        return draft.count += payload
    },
    DECREMENT: draft => draft.count -= 1
}, {...INTITIAL_STATE});

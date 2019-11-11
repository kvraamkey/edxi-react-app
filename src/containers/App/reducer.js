import {COUNT_DECREMENT, COUNT_INCREMENT} from "./type";

const INTITIAL_STATE = 0;

export const countReducer = (state = INTITIAL_STATE, action) => {
    switch (action.type) {
        case COUNT_INCREMENT:
            return state + action.payload;
        case COUNT_DECREMENT:
            return state + action.payload
        default :
            return state;
    }
}
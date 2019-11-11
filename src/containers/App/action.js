import {COUNT_INCREMENT} from "./type";

export function counterIncrement(value) {
    return {
        type: COUNT_INCREMENT,
        payload: value
    }
}
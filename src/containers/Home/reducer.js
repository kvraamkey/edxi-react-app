import createReducer from "store/createReducer";

// export const HomeReducer = (state = {}, action) => {
//     switch (action.type) {
//         case 'GET_NEWS':
//             return {...state, loading: true};
//         case 'NEWS_RECEIVED':
//             return {...state, news: action.json, loading: false}
//         case 'GET_USERS':
//             return {...state, loading: true};
//         case 'USERS_RECEIVED':
//             return {...state, users: action.json, loading: false}
//         default:
//             return state;
//     }
// };

export const HomeReducer = createReducer({
    GET_NEWS: (draft) => {
        draft.loading = true;
    },
    NEWS_RECEIVED: (draft, payload) => {
        draft.loading = false
        draft.news = payload
    },
    GET_USERS: (draft) => {
        draft.loading = true;
    },
    USERS_RECEIVED: (draft, payload) => {
        draft.loading = false
        draft.users = payload
    }

}, {loading: true, news: [], users: []})
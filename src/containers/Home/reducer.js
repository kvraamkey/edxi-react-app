import createReducer from "store/createReducer";

const homeInitStore = {
    loading: true,
    error:false,
    errorMessage:"something went wrong",
    news: [],
    users: []
}

export const HomeReducer = createReducer({
    GET_NEWS: (draft) => {
        draft.loading = true;
    },
    NEWS_RECEIVED: (draft, payload) => {
        draft.loading = false
        draft.news = payload
    },
    NEWS_ERROR: (draft, payload) => {
        draft.loading = false
        draft.error = true
        draft.errorMessage = payload
    },
    GET_USERS: (draft) => {
        draft.loading = true;
    },
    USERS_RECEIVED: (draft, payload) => {
        draft.loading = false
        draft.users = payload
    }

}, homeInitStore)
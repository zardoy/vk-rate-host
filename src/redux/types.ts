import rootReducer from "./reducers";

export enum ReduxActions {
    SET_USER_TYPE = "SET_USER_TYPE",

    SET_HOSTS_LIST = "SET_HOSTS_LIST",
    SET_HOST_INFO = "SET_HOST_INFO",

    SET_HOST_COMMENTS = "SET_HOST_COMMENTS",

    SET_ACTIVE_DIALOG = "SET_ACTIVE_DIALOG",
    SHOW_PRELOADER = "SHOW_PRELOADER",
    HIDE_PRELOADER = "HIDE_PRELOADER"
}

export type AppState = ReturnType<typeof rootReducer>;
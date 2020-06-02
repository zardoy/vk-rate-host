import { ReduxActions } from "../types"
import { GlobalsState } from "./types"

const initialState: GlobalsState = {
    preloaders: 0,
    activeDialog: null
}

export default (state = initialState, action: any): GlobalsState => {
    switch (action.type) {
        case ReduxActions.SET_ACTIVE_DIALOG:
            return { ...state, activeDialog: action.payload };
        case ReduxActions.SHOW_PRELOADER:
            return { ...state, preloaders: state.preloaders + 1 };
        case ReduxActions.HIDE_PRELOADER:
            return { ...state, preloaders: state.preloaders - 1 };
        default:
            return state;
    }
}
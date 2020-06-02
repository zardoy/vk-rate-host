import { ReduxActions } from "../types";
import { HostRatingsState } from "./types";

const initialState: HostRatingsState = {
    comments: null
};

export default (state = initialState, action: any) => {
    switch (action.type) {
        case ReduxActions.SET_HOST_COMMENTS:
            return { ...state, ratings: action.payload };
        default:
            return state;
    }
}
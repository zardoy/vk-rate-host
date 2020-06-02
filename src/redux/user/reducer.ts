import { ReduxActions } from "../types";
import { UserState } from "./types";

const initialState: UserState = {
    userType: null
}

export default (state = initialState, action: any): UserState => {
    switch (action.type) {
        case ReduxActions.SET_USER_TYPE:
            return { ...state, userType: action.payload };
        default:
            return state;
    }
}
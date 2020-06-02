import { ReduxActions } from "../types";
import { UserState } from "./types";

export const setUserType = (userType: UserState["userType"]) => ({
    type: ReduxActions.SET_USER_TYPE,
    payload: userType
});
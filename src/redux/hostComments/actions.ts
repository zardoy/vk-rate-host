import { ReduxActions } from "../types";
import { HostRatingsState } from "./types";

export const setHostComments = (comments: HostRatingsState["comments"]) => ({
    action: ReduxActions.SET_HOST_COMMENTS,
    payload: comments
});
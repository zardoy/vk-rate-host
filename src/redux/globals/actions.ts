import { GlobalsState } from "./types";
import { ReduxActions } from "../types";

export const setActiveDialog = (dialog: GlobalsState["activeDialog"]) => ({
    type: ReduxActions.SET_ACTIVE_DIALOG,
    payload: dialog
});

export const setPreloaderVisibility = (show: boolean) => (
    show ? {
        type: ReduxActions.SHOW_PRELOADER
    } : {
            type: ReduxActions.HIDE_PRELOADER
        }
);
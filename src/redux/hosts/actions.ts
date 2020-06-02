import { ReduxActions } from "../types";
import { HostsState } from "./types";

export const setHostsRatingList = (list: HostsState["hostsRatingList"]) => {
    //normolize data
    list = list.map(entry => ({ ...entry, host_site: entry.host_site.replace(/^https?:\/\//i, "") }));
    return {
        type: ReduxActions.SET_HOSTS_LIST,
        payload: list
    }
};

export const setDetailedHostData = (host_id: number, host_data: HostsState["hostsDetailedData"][""]) => ({
    type: ReduxActions.SET_HOST_INFO,
    payload: {
        host_id,
        host_data
    }
});
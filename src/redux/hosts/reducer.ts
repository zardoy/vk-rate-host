import { ReduxActions } from "../types";
import { HostsState } from "./types";

const initialState: HostsState = {
    ratingLastUpdate: null,
    hostsRatingList: [],
    hostsDetailedData: {},
}

export default (state = initialState, action: any): HostsState => {
    switch (action.type) {
        case ReduxActions.SET_HOSTS_LIST:
            return { ...state, hostsRatingList: action.payload, ratingLastUpdate: Date.now() };
        case ReduxActions.SET_HOST_INFO:
            let { host_id, host_data } = action.payload;
            return { ...state, hostsDetailedData: { [host_id]: host_data, ...state.hostsDetailedData } };
        default:
            return state;
    }
}
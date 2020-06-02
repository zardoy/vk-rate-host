import { DetailedHostInfo, SummaryHostInfo } from "../../backend/methods";

export interface HostsState {
    ratingLastUpdate: null | number, //if null, list will be updated
    hostsRatingList: SummaryHostInfo[],
    hostsDetailedData: {
        [host_id: string]: DetailedHostInfo
    }
}
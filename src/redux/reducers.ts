import { combineReducers } from "redux";

import GlobalsReducer from "./globals/reducer";
import HostsReducer from "./hosts/reducer";
import UserReducer from "./user/reducer";

export default combineReducers({
    user: UserReducer,
    hosts: HostsReducer,
    hostComments: GlobalsReducer,
    globals: GlobalsReducer
});
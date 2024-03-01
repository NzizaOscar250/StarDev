import { combineReducers } from "redux";
import Auth from "./Auth";
import Menu from "./Menu";
import FeedBack from "./FeedBack";

const RootReducers = combineReducers({
    Auth,Menu,feedback:FeedBack
})

export default RootReducers;
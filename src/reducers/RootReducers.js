import { combineReducers } from "redux";
import Projects from "./Projects"
import Activities from './Activities'
import SubActivities from "./SubActivities";
import Components from "./Components"

const RootReducers = combineReducers({
    Projects,Components,Activities,SubActivities
})

export default RootReducers;
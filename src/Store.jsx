import RootReducers from "./reducers/RootReducers"
import  {createStore,compose,applyMiddleware} from "redux"
import { thunk } from "redux-thunk"


const Store = createStore(RootReducers, compose(applyMiddleware(thunk)))
export default Store;
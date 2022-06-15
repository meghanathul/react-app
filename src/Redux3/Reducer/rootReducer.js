import { combineReducers } from "redux";
import handleMyCounter from "./counterReduser";
const rootReducer = combineReducers({
    handleMyCounter,
})
export default rootReducer
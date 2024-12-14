import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import profileReducer from "./profileReducer";
import dataReducer from "./dataReducer";


const rootReducer = combineReducers({
    counter: counterReducer,
    profile: profileReducer,
    data: dataReducer
})

export default rootReducer
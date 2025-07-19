import { thunk } from "redux-thunk";

import{ combineReducers, legacy_createStore, applyMiddleware} from "redux";
import AuthReducer from "./Auth/Reducer";

const rootReducer= combineReducers({
    auth :AuthReducer

});


export  const store = legacy_createStore(rootReducer , applyMiddleware(thunk))
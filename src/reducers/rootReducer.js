import combineReducers from "./combineReducers";
import authReducer from "./authReducer";
import acReducer from "./acReducer";
import settingsReducer from './settingsReducer'
import { isAuthenticated } from "../tools/session";

export const defaultState = {
    auth: {
       isLoading: false,
       isAuthenticated: isAuthenticated(),
       error: null
    },
    ac: {
        remote: null,
        local: null
    },
    settings: {
        darkmode: true
    }
}

const reducers = combineReducers({
    auth: authReducer,
    ac: acReducer,
    settings: settingsReducer
})

export default reducers
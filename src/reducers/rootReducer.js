import combineReducers from "./combineReducers";
import authReducer from "./authReducer";
import acReducer from "./acReducer";
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
    }
}

const reducers = combineReducers({
    auth: authReducer,
    ac: acReducer
})

export default reducers
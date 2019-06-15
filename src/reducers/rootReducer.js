import combineReducers from "./combineReducers";
import authReducer from "./authReducer";
import { isAuthenticated } from "../tools/storage";

export const defaultState = {
    auth: {
       isLoading: false,
       isAuthenticated: isAuthenticated(),
       error: null
    }
}

const reducers = combineReducers({
    auth: authReducer
})

export default reducers
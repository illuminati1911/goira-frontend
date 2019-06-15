import combineReducers from "./combineReducers";
import authReducer from "./authReducer";

export const defaultState = {
    auth: {
       isLoading: false,
       error: null
    }
}

const reducers = combineReducers({
    auth: authReducer
})

export default reducers
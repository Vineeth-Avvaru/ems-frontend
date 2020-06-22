import { createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer } from "./reducers/reducer";
import { UserAuthenticationData } from "./reducers/loginForm";
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Reducer : Reducer,
            UserAuthenticationData: UserAuthenticationData
        }),
        applyMiddleware(thunk)
    );

    return store;
}
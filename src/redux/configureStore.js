import { createStore, combineReducers, applyMiddleware } from "redux";
import { Reducer } from "./reducers/reducer";
import { UserAuthenticationData } from "./reducers/loginForm";
import { EmployeesData } from './reducers/employees';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            Reducer : Reducer,
            UserAuthenticationData: UserAuthenticationData,
            EmployeesData: EmployeesData
        }),
        applyMiddleware(thunk)
    );

    return store;
}
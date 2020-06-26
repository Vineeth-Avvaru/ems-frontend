import { createStore, combineReducers, applyMiddleware } from "redux";
import { UserAuthenticationData } from "./reducers/loginForm";
import { EmployeesData } from './reducers/employees';
import { ReviewsData } from './reducers/reviews';
import thunk from 'redux-thunk';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            UserAuthenticationData: UserAuthenticationData,
            EmployeesData: EmployeesData,
            ReviewsData: ReviewsData
        }),
        applyMiddleware(thunk)
    );

    return store;
}
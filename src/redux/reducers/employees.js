import * as ActionTypes from '../ActionTypes';

export const initialEmployeesData = {
    employees : [],
}

export const EmployeesData = (state = initialEmployeesData, action) => {

    switch (action.type) {
        case ActionTypes.FETCH_EMPLOYEES:
            return {...state, employees: action.payload.employeesData}
    default:
    return state;
    }
}


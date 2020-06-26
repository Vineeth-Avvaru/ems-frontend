import * as ActionTypes from '../ActionTypes';

export const initialEmployeesData = {
    employees : [],
    employeeByID : {
        id: "",
        name: "",
        password: "",
        role: "",
        description: ""
    }
}

export const EmployeesData = (state = initialEmployeesData, action) => {

    switch (action.type) {
        case ActionTypes.FETCH_EMPLOYEES:
            return {...state, employees: action.payload.employeesData}
        
        case ActionTypes.SET_EMPLOYEE_BY_ID:
            let employeeData = {
                id: action.payload.ID,
                name: action.payload.Name,
                password: action.payload.Password,
                role: action.payload.Role,
                description: action.payload.Description
            }
            return {...state, employeeByID: {...employeeData}}
        
        case ActionTypes.UPDATE_EMPLOYEE_ROLE:
            return {...state, employeeByID: {...state.employeeByID, role: action.payload}}
        
        case ActionTypes.UPDATE_EMPLOYEE_DESCRIPTION:
            return {...state, employeeByID: {...state.employeeByID, description: action.payload}}
    default:
    return state;
    }
}


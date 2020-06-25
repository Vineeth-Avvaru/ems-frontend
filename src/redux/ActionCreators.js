import * as ActionTypes from './ActionTypes';
import { apiServicePost, apiServiceGet, apiServicePut } from '../shared/ApiService';

const USERLOGINURL = '/login';
const FETCHEMPLOYEESURL = '/fetchEmployees';
const ADDEMPLOYEE = '/addEmployee';

export const onRoleChange = (role) => ({
    type: ActionTypes.ROLE_CHANGE,
    payload: role
})

export const onIDChange = (id) => ({
    type: ActionTypes.LOGIN_ID_CHANGE,
    payload: id
})

export const onPasswordChange = (password) => ({
    type: ActionTypes.PASSWORD_CHANGE,
    payload: password
})

export const authenticateUser = (authenticationData) => ({
    type: ActionTypes.AUTHENTICATE_USER,
    payload: authenticationData
})

export const userLogin = (role, id, password) => (dispatch) => {

    const credentials = {
        role: role,
        id: id,
        password: password
    }
    return apiServicePost(USERLOGINURL, credentials)
    .then(authenticationData => dispatch(authenticateUser(authenticationData)));
}

export const userLogout = ()=> ({
    type: ActionTypes.LOGOUT_USER
})

export const setEmployeesData = (employeesData) => ({
    type: ActionTypes.FETCH_EMPLOYEES,
    payload: employeesData
})

export const fetchEmployees = () => (dispatch) => {
    return apiServiceGet(FETCHEMPLOYEESURL)
    .then(employeesData => dispatch(setEmployeesData(employeesData)));
}

export const addEmployee = (employeeData) => (dispatch) => {
    console.log(employeeData);
    return apiServicePut(ADDEMPLOYEE, employeeData)
    .then(data => dispatch(fetchEmployees()));
}
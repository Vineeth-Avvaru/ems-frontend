import * as ActionTypes from './ActionTypes';
import { apiServicePost, apiServiceGet, apiServicePut, apiServiceDelete } from '../shared/ApiService';

const USERLOGINURL = '/login';
const FETCHEMPLOYEESURL = '/fetchEmployees';
const ADDEMPLOYEE = '/addEmployee';
const DELETEEMPLOYEE = '/deleteEmployee';

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
    return apiServicePut(ADDEMPLOYEE, employeeData)
    .then(data => dispatch(fetchEmployees()));
}

export const deleteEmployee = (deleteID) => (dispatch) => {
    return apiServiceDelete(DELETEEMPLOYEE, deleteID)
    .then(data => dispatch(fetchEmployees()));
}
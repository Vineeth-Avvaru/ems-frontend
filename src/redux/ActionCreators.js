import * as ActionTypes from './ActionTypes';
import { apiServicePost, apiServiceGet } from '../shared/ApiService';

const USERLOGINURL = '/login';

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
import * as ActionTypes from '../ActionTypes';

export const InitialAuthenticationData = {
    name: "",
    role:"Admin",
    id: "",
    password: "",
    isUserAuthentic: false,
    isUserLoggedOut: true
}

export const UserAuthenticationData = (state = InitialAuthenticationData, action) => {

    switch (action.type) {
        case ActionTypes.ROLE_CHANGE:
            return {...state, role: action.payload}
        case ActionTypes.LOGIN_ID_CHANGE:
            return {...state, id: action.payload}
        case ActionTypes.PASSWORD_CHANGE:
            return {...state, password: action.payload}
        case ActionTypes.AUTHENTICATE_USER:
            return {...state, isUserAuthentic: action.payload.isUserAuthentic
                            , isUserLoggedOut: !action.payload.isUserAuthentic
                            , name: action.payload.name }
        case ActionTypes.LOGOUT_USER:
            return {...state, isUserLoggedOut: true, name: "", role: "Admin", id: "", password: ""}
        default:
            return state;
    }
}
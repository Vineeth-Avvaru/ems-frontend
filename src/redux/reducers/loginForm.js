import * as ActionTypes from '../ActionTypes';

export const InitialAuthenticationData = {
    name: "",
    role:"",
    id: "",
    password: "",
    isUserAuthentic: false,
    isUserLoggedOut: true
}

export const UserAuthenticationData = (state = InitialAuthenticationData, action) => {

    switch (action.type) {
        case ActionTypes.AUTHENTICATE_USER:
            return {...state, isUserAuthentic: action.payload.isUserAuthentic
                            , isUserLoggedOut: !action.payload.isUserAuthentic
                            , name: action.payload.name }
        case ActionTypes.LOGOUT_USER:
            return {...state, isUserLoggedOut: true}
        default:
            return state;
    }
}
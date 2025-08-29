import { authActionTypes } from "../Constant/authConstant";

export function loginRequestAction(state, action){
    return {
        type: authActionTypes.LOGIN_REQUEST,
    };
}

export function loginRequestSuccess(action) {
    return {
        type: authActionTypes.LOGIN_REQUEST_SUCCESS,
        payload: action,
    };
}

export function loginRequestFail(state, action) {
    return {
        type: authActionTypes.LOGIN_REQUEST_FAIL,
        payload: action?.payload,
    };
}

export function logoutRequestAction(state, action) {
    return {
        type: authActionTypes.LOGOUT_REQUEST,
    };
}

export function logoutRequestSuccess(state, action) {
    return {
        type: authActionTypes.LOGOUT_REQUEST_SUCCESS,
        payload: action?.payload,
    }
}


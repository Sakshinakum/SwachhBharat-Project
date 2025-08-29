import { stateActionTypes } from "../Constant/stateConstant";

// List Request

export const stateListRequest = () =>  ({
    type: stateActionTypes.STATE_LIST_REQUEST
});

export const stateListSuccess = (payload) => ({
    type : stateActionTypes.STATE_LIST_REQUEST_SUCCESS,
    payload
});

export const stateListFailure = (payload) => ({
    type : stateActionTypes.STATE_LIST_REQUEST_FAILURE,
    payload
});

// ADD request

export const stateAddRequest = () => ({
    type : stateActionTypes.STATE_ADD_REQUEST
});

export const stateAddSuccess = (payload) => ({
    type : stateActionTypes.STATE_ADD_REQUEST_SUCCESS,
    payload
});

export const stateAddFailure = (payload) => ({
    type : stateActionTypes.STATE_ADD_REQUEST_FAILURE,
    payload
});

// EDit request

export const stateEditRequest = () => ({
    type : stateActionTypes.STATE_EDIT_REQUEST
});

export const stateEditSuccess = (payload) => ({
    type : stateActionTypes.STATE_EDIT_REQUEST_SUCCESS,
    payload
});

export const stateEditFailure = (payload) => ({
    type : stateActionTypes.STATE_EDIT_REQUEST_FAILURE,
    payload
});
import { countryActionTypes } from "../Constant/countryConstant";


// list request

export const countryListRequest = () => ({
    type : countryActionTypes.COUNTRY_LIST_REQUEST
});

export const countryListSuccess = (payload) => ({
    type : countryActionTypes.COUNTRY_LIST_REQUEST_SUCCESS,
    payload
});

export const countryListFailure = (payload) => ({
    type: countryActionTypes.COUNTRY_LIST_REQUEST_FAILURE,
    payload
});

// add request

export const countryAddRequest = () => ({
    type : countryActionTypes.COUNTRY_ADD_REQUEST
});

export const countryAddSuccess = (payload) => ({
    type : countryActionTypes.COUNTRY_ADD_REQUEST_SUCCESS,
    payload
});

export const countryAddFailure = (payload) => ({
    type : countryActionTypes.COUNTRY_ADD_REQUEST_FAILURE,
    payload
});

//edit request

export const countryEditRequest = () => ({
    type: countryActionTypes.COUNTRY_EDIT_REQUEST
});

export const countryEditSuccess = (payload) => ({
    type: countryActionTypes.COUNTRY_EDIT_REQUEST_SUCCESS,
    payload
});

export const countryEditFailure = (payload) => ({
    type : countryActionTypes.COUNTRY_EDIT_REQUEST_FAILURE,
    payload
});
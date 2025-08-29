import { languageActionTypes } from "../Constant/languageConstant";

//list request

export const languageListRequest = () => ({
    type: languageActionTypes.LANGUGAE_LIST_REQUEST
});

export const languageListSuccess = (payload) => ({
    type: languageActionTypes.LANGUAGE_LIST_REQUEST_SUCCESS,
    payload
});

export const languageListFailure = (payload) => ({
    type: languageActionTypes.LANGUAGE_LIST_REQUEST_FAILURE,
    payload
});

//add request

export const languageAddRequest = () => ({
    type: languageActionTypes.LANGUGAE_ADD_REQUEST
});

export const languageAddSuccess = (payload) => ({
    type: languageActionTypes.LANGUGAE_ADD_REQUEST_SUCCESS,
    payload
});

export const languageAddFailure = (payload) => ({
    type: languageActionTypes.LANGUGAE_ADD_REQUEST_FAILURE,
    payload
});

//edit request

export const languageEditRequest = () => ({
    type: languageActionTypes.LANGUGAE_EDIT_REQUEST
});

export const languageEditSuccess = (payload) => ({
    type: languageActionTypes.LANGUGAE_EDIT_REQUEST_SUCCESS,
    payload
});

export const languageEditFailure = (payload) => ({
    type: languageActionTypes.LANGUGAE_EDIT_REQUEST_FAILURE,
    payload
});
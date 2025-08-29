import { data } from "react-router-dom";
import { languageActionTypes } from "../Constant/languageConstant";

const initialLanguage = {
    data: "",
    loading: false,
    error: "",
    added: false,
    editable: false,
};

export const languageReducer = (language = initialLanguage, action) => {
    switch (action.type) {
        //list

        case languageActionTypes.LANGUGAE_LIST_REQUEST:
            return {
                ...language,
                loading: true,
                error: "",
            };
        case languageActionTypes.LANGUAGE_LIST_REQUEST_SUCCESS:
            return {
                ...language,
                loading: false,
                data: action.payload,
                error: ""
            };
        case languageActionTypes.LANGUAGE_LIST_REQUEST_FAILURE:
            return {
                ...language,
                loading: false,
                data: "",
                error: action.payload,
            };

        //add

        case languageActionTypes.LANGUGAE_ADD_REQUEST:
            return { 
                ...language,
                loading: true,
                error: "",
            };
        case languageActionTypes.LANGUGAE_ADD_REQUEST_SUCCESS:
            return {
                ...language,
                loading: false,
                data: action.payload,
                error: ""
            };
        case languageActionTypes.LANGUGAE_ADD_REQUEST_FAILURE:
            return {
                ...language,
                loading: false,
                data: "",
                error: action.payload,
            };

        //edit

        case languageActionTypes.LANGUGAE_EDIT_REQUEST:
            return {
                ...language,
                loading: true,
                data: "",
                error: "",
            };
        case languageActionTypes.LANGUGAE_EDIT_REQUEST_SUCCESS:
            return {
                ...language,
                loading: false,
                data: action.payload,
                error: "",
            };
        case languageActionTypes.LANGUGAE_EDIT_REQUEST_FAILURE:
            return {
                ...language,
                loading: false,
                data: "",
                error: action.payload,
            };
        default:
            return language;
    }
};
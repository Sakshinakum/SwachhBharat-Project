import { data } from "react-router-dom";
import { stateActionTypes  } from "../Constant/stateConstant";

const initialState = {
    data: "",
    loading: false,
    error: "",
    added: false,
    editable: false,
};

export const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        //list

        case stateActionTypes.STATE_LIST_REQUEST:
            return {
                ...state,
                loading: true,
                error: "",
            };
        case stateActionTypes.STATE_LIST_REQUEST_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: "",
            };
        case stateActionTypes.STATE_LIST_REQUEST_FAILURE:
            return {
                ...state,
                loading: false,
                data: "",
                error: action.payload,
            };
        
        //add
        case stateActionTypes.STATE_ADD_REQUEST:
            return {
                ...state,
                added: true,
                error: "",
            };
        case stateActionTypes.STATE_ADD_REQUEST_SUCCESS:
            return {
                ...state,
                added: false,
                data: action.payload,
                error: "",
            };
        case stateActionTypes.STATE_ADD_REQUEST_FAILURE:
            return {
                ...state,
                added: false,
                data: "",
                error: action.payload,
            };

        //edit

        case stateActionTypes.STATE_EDIT_REQUEST:
            return {
                ...state,
                editable: true,
                data: "",
                error : "",
            };
        case stateActionTypes.STATE_EDIT_REQUEST_SUCCESS:
            return {
                ...state,
                editable: false,
                data: action.payload,
                error: "",
            };
        case stateActionTypes.STATE_EDIT_REQUEST_FAILURE:
            return {
                ...state,
                editable: false,
                data: "",
                error: action.payload,
            };
        default:
            return state;
    }
};
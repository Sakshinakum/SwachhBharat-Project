import { data } from "react-router-dom";
import { countryActionTypes } from "../Constant/countryConstant";


const initialCountryState = {
    data: "",
    loading: false,
    error: "",
    added: false,
    editable: false,
};


export const countryReducer = (country = initialCountryState,  action) => {
    switch (action.type) {
        // list 
        case countryActionTypes.COUNTRY_LIST_REQUEST:
            return {
                ...country,
                loading: true,
                error: "",
            };
        case countryActionTypes.COUNTRY_LIST_REQUEST_SUCCESS:
            return {
                ...country,
                loading: false,
                data: action.payload,
                error: ""

            };
        case countryActionTypes.COUNTRY_LIST_REQUEST_FAILURE:
            return  {
                ...country,
                loading: false,
                data: "",
                error: action.payload,
            };

        // add

        case countryActionTypes.COUNTRY_ADD_REQUEST:
            return {
                ...country,
                added: true,
                error : "",
            };
        case countryActionTypes.COUNTRY_ADD_REQUEST_SUCCESS:
            return {
                ...country,
                added: false,
                data: action.payload,
                error: "",
            };
        case countryActionTypes.COUNTRY_ADD_REQUEST_FAILURE:
            return {
                ...country,
                added: false,
                data: "",
                error: action.payload,
            };

        //edit

        case countryActionTypes.COUNTRY_EDIT_REQUEST:
            return {
                ...country,
                editable: true,
                data: "",
                error: "",
            };
        case countryActionTypes.COUNTRY_EDIT_REQUEST_SUCCESS:
            return {
                ...country,
                editable: false,
                data: action.payload,
                error: "",
            };
        case countryActionTypes.COUNTRY_EDIT_REQUEST_FAILURE:
            return {
                ...country,
                editable: false,
                data: "",
                error: action.payload,
            };
        default:
            return country;

    }
};
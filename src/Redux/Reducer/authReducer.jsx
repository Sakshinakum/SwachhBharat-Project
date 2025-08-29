import { authActionTypes } from "../Constant/authConstant";

const initialState = {
  loading: false,
  loginStatus: false,
  logoutStatus: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case authActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case authActionTypes.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        loginStatus: action.payload,
        logoutStatus: false,
        loading: false,
      };

    case authActionTypes.LOGIN_REQUEST_FAIL:
      return {
        ...state,
        loginStatus: false,
        logoutStatus: true,
        loading: false,
      };

    case authActionTypes.LOGOUT_REQUEST:
      return { 
        ...state, 
        loading: true 
      };

    case authActionTypes.LOGOUT_REQUEST_SUCCESS:
      return {
        ...state,
        loginStatus: false,
        logoutStatus: true,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;





 

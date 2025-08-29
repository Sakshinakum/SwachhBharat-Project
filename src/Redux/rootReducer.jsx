// import { combineReducers } from "redux";

// import authReducer from "./Reducer/authReducer";
// import { stateReducer } from "./Reducer/stateReducer";
// import { countryReducer } from "./Reducer/countryReducer";
// import { languageReducer } from "./Reducer/languageReducer";


// const appReducer = combineReducers({
//     login : authReducer,
//     state: stateReducer,
//     country: countryReducer,
//     language: languageReducer
// });

// const rootReducer = (state, action) => {
//     return appReducer(state, action);
// };

// export default rootReducer;


import { combineReducers } from "redux";

import authReducer from "./Reducer/authReducer";
import { stateReducer } from "./Reducer/stateReducer";
import { countryReducer } from "./Reducer/countryReducer";
import { languageReducer } from "./Reducer/languageReducer";

const appReducer = combineReducers({
    login : authReducer,
    state : stateReducer,
    country : countryReducer,
    language : languageReducer
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;
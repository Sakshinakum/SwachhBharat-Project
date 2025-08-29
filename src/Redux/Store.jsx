import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./rootReducer";
import middleware from "./middleware";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const persistConfig = {
  key: "reducer",

  storage,

  whitelist: ["login","state","country","language"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const configStore = (initialState = {}) => {
  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );

  const persistor = persistStore(store);

  return { persistor, store };
};

const { store, persistor } = configStore();
window.store = store;

export { store, persistor };

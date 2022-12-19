import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";

import thunk from "redux-thunk";
import { authReducer } from "./Auth/reducer";
import { companyReducer } from "./Companies/reducer";
import { jobReducer } from "./Jobs/reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  company: companyReducer,
  job: jobReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

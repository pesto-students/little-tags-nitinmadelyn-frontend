import { combineReducers } from "redux";

import cartReducer from "./reducers/cart";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;

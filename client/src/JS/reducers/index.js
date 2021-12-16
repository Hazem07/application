import { combineReducers } from "redux";
import userReducer from "./user";
import productReducer from "./product";
import contactReducers from "./company";
import cartReducer from "./cartReducers";
import achatReducer from "./achat";
const rootReducer = combineReducers({
  userReducer,
  contactReducers,
  productReducer,
  cartReducer,
  achatReducer,
});
export default rootReducer;

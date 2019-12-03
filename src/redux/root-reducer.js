import {combineReducers} from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// Root-reducer : actual base reducer object that represents all states of our app

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});
import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'; // use local storage as default storage
// import sessionStorage from "redux-persist/types/storage/session";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import itemReducer from "./item/item.reducer";

const persistConfig = {
    key: 'root', // at what point inside our reducer obj we want to start store everything
    storage,
    whitelist: ['cart'] // contains string names of any reducers we want to store
};

// Root-reducer : actual base reducer object that represents all states of our app

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    item: itemReducer
});

export default persistReducer(persistConfig, rootReducer);

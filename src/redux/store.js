import {createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'; //nice to use when debugging redux code
import {persistStore} from 'redux-persist'; // allows browser to cache store depending on config objects that we set

import rootReducer from './root-reducer';

// middleware that the store's expecting will be an array of methods
const middlewares = [logger];

// '...middlewares' spreads out all the values in the middlewares array
// i.e., if middlewares=[1,2,3], then ...middlewares = 1,2,3
export const store = createStore(rootReducer, applyMiddleware(...middlewares));

// persisted version of our store.
export const persistor = persistStore(store);

//export default { store, persistStore };

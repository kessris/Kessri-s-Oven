import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import ScrollToTop from "./ScrollToTop";

import {store, persistor} from './redux/store';

import './index.css';
import App from './App';

/**
 * Provider gives access to the store and reducers. Needs to be parent of everything.
 * PersistGate stores session info (i.e., cart) until
 * ScrollToTop scrolls the page to top on every page transition.
 */
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <ScrollToTop>
                    <App />
                </ScrollToTop>
            </PersistGate>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
/**
 * Uses memoization for cart-icon.component.jsx for performance issues.
 * Selector just returns a piece of state.
 */

import {createSelector} from 'reselect';

// only gets 'cart' state from the whole state
const selectCart = state => state.cart;

// 'selectCartItems' is a property of state.cart
// @param selectors: takes an array of input selectors
// @param combiner: function that returns a value we want out of the selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity,
        0
    )
);

export const selectCartTotal = createSelector(
  [selectCartItems],
    cartItems => cartItems.reduce(
        (accumalatedQuantity, cartItem) =>
            accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
    )
);

// Utility functions allow us to keep our files clean and organize functions
// that we may need in multiple files in one location.

export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id); // will return first item to be found. Undefined if not found.

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity+1} : cartItem
        )
    } else
        return [...cartItems, {...cartItemToAdd, quantity: 1}]
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id); // will return first item to be found. Undefined if not found.

    if (existingCartItem.quantity !== 1) {
        return cartItems.map(
            cartItem => cartItem.id === cartItemToRemove.id?
                {...cartItem, quantity: cartItem.quantity - 1} : cartItem
        );
    } else
        return cartItems;
};

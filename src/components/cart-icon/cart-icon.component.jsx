import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import {toggleCartHidden} from "../../redux/cart/cart.actions";

import './cart-icon.styles.scss'

const CartIcon = ({ toggleCartHidden }) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
);

/**
 * @function mapDispatchToProps: write over a state in redux store
 * @param dispatch: accepts any action objects from redux as parameter
 * @returns function that is equivalent to this.setState({...}) that will get passed down as props to a component
 */
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(null, mapDispatchToProps)(CartIcon);

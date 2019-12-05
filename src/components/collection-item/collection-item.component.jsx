import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux'
import {addItem, toggleCartHidden} from "../../redux/cart/cart.actions";

import './collection-item.styles.scss';
import {createStructuredSelector} from "reselect";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

const CollectionItem = ({ item, addItem, toggleCartHidden, cartHidden }) => {
    const {name, price, imageUrl} = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}/>

            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>

            <CustomButton inverted onClick={() => {
                addItem(item);
                if (cartHidden) toggleCartHidden();
            }}>Add to cart</CustomButton>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item)),
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    cartHidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);

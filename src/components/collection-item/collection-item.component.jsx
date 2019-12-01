import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import {connect} from 'react-redux'
import {addItem} from "../../redux/cart/cart.actions";
import Modal from 'react-modal';

import './collection-item.styles.scss';

Modal.setAppElement(document.getElementById('root'));

class CollectionItem extends React.Component {

    constructor() {
        super();
        this.state = {
            modalIsOpen: false
        }
    }

    openModal = () => {
        this.setState({modalIsOpen: true});
    };

    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        //this.subtitle.style.color = '#f00';
    };

    closeModal = () => {
        this.setState({modalIsOpen: false});
    };

    render() {
        const {item, addItem} = this.props;
        const {name, price, imageUrl} = item;

        return (
                <div className='collection-item'>
                    <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}/>

                    <div className='collection-footer'>
                        <span className='name'>{name}</span>
                        <span className='price'>{price}</span>
                    </div>

                    <CustomButton inverted onClick={this.openModal}>View Detail</CustomButton>

                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        portalClassName='Modal'
                        className='Modal'
                    >
                        MODAL IS OPEN
                        <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
                    </Modal>

                </div>
        )
    }



}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);

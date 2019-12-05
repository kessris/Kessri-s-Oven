import React from 'react';
import CustomButton from "../custom-button/custom-button.component";
import { Lightbox } from "react-modal-image";

class GalleryItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modalOpen: false
        }
    }

    openModal = () => {
        this.setState({
            modalOpen: true
        })
    };

    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    };

    render() {
        const {name, imageUrl} = this.props.item;

        return (
            <div className='collection-item'>
                <div className='image' style={{ backgroundImage: `url(${imageUrl})` }}/>
                {
                    this.state.modalOpen &&
                        <Lightbox
                            medium={imageUrl}
                            large={imageUrl}
                            alt={name}
                            onClose={() => this.closeModal()}
                        />

                }

                <div className='collection-footer'>
                    <span className='name'>{name}</span>
                </div>

                <CustomButton inverted onClick={() => this.openModal()}>View Image</CustomButton>
            </div>
        )
    }
}

export default GalleryItem;

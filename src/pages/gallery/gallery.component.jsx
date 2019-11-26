import React from 'react';
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: SHOP_DATA
        }
    }

    render() {
        const {photos} = this.state;
        return (
            <div className='shop-page'>
                {photos.map(({id, ...otherCollectionProps}) =>
                     <CollectionPreview key={id} {...otherCollectionProps} />)}
            </div>
        );
    }
}

export default Gallery;
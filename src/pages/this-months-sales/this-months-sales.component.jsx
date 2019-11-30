import React from 'react';
import SHOP_DATA from "./this-months-sales.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class ThisMonthsSales extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photos: SHOP_DATA
        }
    }

    render() {
        const {photos} = this.state;
        return (
            <div className='page'>
                {photos.map(({id, ...otherCollectionProps}) =>
                    <CollectionPreview key={id} {...otherCollectionProps} />)}
            </div>
        );
    }
}

export default ThisMonthsSales;
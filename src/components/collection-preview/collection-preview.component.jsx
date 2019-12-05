import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import './collection-preview.styles.scss'

/**
 * I.E.) TRADITIONAL DESSERTS (4 Boxes)
 */
const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                        .slice(0, 4)
                        .map(item =>
                        <CollectionItem key={item.id} item={item} />)
                }

            </div>
        </div>
    )
};

export default CollectionPreview;

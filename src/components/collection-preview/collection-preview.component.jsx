import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import {withRouter} from 'react-router-dom';
import './collection-preview.styles.scss'

/**
 * I.E.) TRADITIONAL DESSERTS (4 Boxes)
 */
const CollectionPreview = ({ title, items, history, routeName, match }) => {
    return (
        <div className='collection-preview'>
            <h1 className='title' onClick={() => {
                console.log(routeName);
                history.push(`${match.url}/${routeName}`);
            }}>
                {title.toUpperCase()} (more..)
            </h1>

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

export default withRouter(CollectionPreview);

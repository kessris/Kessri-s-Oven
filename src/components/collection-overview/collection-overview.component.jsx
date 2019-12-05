import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";
import './collection-overview.styles.scss';
import CollectionPreview from "../collection-preview/collection-preview.component";
import {selectCollections} from "../../redux/item/item.selectors";

const CollectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(({id, ...otherCollectionProps}) =>
            <CollectionPreview key={id} {...otherCollectionProps} />)}
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps)(CollectionsOverview);

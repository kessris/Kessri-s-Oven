import React from 'react';
import {connect} from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';
import {selectCollection} from "../../redux/item/item.selectors";
import './collection.styles.scss';

const CollectionPage = ({ collection: {title, items} }) => (
    <div className='collection-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => (
                    <CollectionItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
);

/**
 * @param ownProps: props of the component that we're wrapping around
 * selectCollection() returns a function, thus we pass (state) once more as a param to wire everything
 */
const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);

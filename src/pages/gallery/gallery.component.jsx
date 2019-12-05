import React from 'react';
import GalleryItem from "../../components/gallery-item/gallery-item.component";
import {selectGalleryCollections} from "../../redux/item/item.selectors";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import './gallery.styles.scss'

const Gallery = ({ collection: {title, items} }) => (
    <div className='gallery-page'>
        <h2 className='title'>{title}</h2>
        <div className='items'>
            {
                items.map(item => (
                    <GalleryItem key={item.id} item={item}/>
                ))
            }
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    collection: selectGalleryCollections
});

export default connect(mapStateToProps)(Gallery);

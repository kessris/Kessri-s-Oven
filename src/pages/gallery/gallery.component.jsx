import React from 'react';
import {Route} from 'react-router-dom';
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collection/collection.component";

const Gallery = ({ match }) => (
    <div className='page'>
        <Route exact path={`${match.path}`}  render={(props) => <CollectionPage {...props} gallery />} />
    </div>
);

export default Gallery;
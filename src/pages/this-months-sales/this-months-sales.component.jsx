import React from 'react';
import {createStructuredSelector} from "reselect";
import {selectMonthlySalesCollections} from "../../redux/item/item.selectors";
import {connect} from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";

const ThisMonthsSales = ({ collection: {title, items} }) => (
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

const mapStateToProps = createStructuredSelector({
    collection: selectMonthlySalesCollections
});

export default connect(mapStateToProps)(ThisMonthsSales);

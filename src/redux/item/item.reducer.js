import ITEM_DATA from './item.data'
import GALLERY_DATA from './gallery.data';
import MONTHLY_SALE_DATA from "./this-months-sales.data";

const INITIAL_STATE = {
    collections: ITEM_DATA,
    galleryCollections: GALLERY_DATA,
    monthlySaleCollections: MONTHLY_SALE_DATA
};

const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default itemReducer;

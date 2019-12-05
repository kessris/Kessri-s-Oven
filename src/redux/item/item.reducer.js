import ITEM_DATA from './item.data'

const INITIAL_STATE = {
    collections: ITEM_DATA
};

const itemReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default itemReducer;

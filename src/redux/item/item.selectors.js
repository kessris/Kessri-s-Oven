import {createSelector} from 'reselect';

const COLLECTION_ID_MAP = {
    traditionalDesserts: 1,
    macarons: 2,
    cookies: 3,
    cakes: 4,
    etc: 5,
    gallery: 6
};

const selectItem = state => state.item;

export const selectCollections = createSelector(
    [selectItem],
    item => item.collections
);

export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectCollections],
        collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
    );

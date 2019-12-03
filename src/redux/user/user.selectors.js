/**
 * Uses memoization to save system performance in header component
 */

import {createSelector} from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector(
    [selectUser],
    user => user.currentUser
);

import { createSelector } from 'reselect';

const torrentListSelector = state => state.torrents.items;

const complexItemsSelector = createSelector(
    torrentListSelector,
    (...args) => Object.keys(...args),
);

export {
    torrentListSelector,
    complexItemsSelector,
};

import { createSelector } from 'reselect';

const selectSearch = state => state.search;

export const selectSearchedAlbums = createSelector(
    [selectSearch],
    (searched) => searched.searchedAlbums
);

export const selectSearchedArtists = createSelector(
    [selectSearch],
    (searched) => searched.searchedArtists
)

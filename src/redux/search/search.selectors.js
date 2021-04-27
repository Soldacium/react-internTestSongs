import { createSelector } from 'reselect';

const selectSaved = state => state.saved;

export const selectSavedAlbums = createSelector(
    [selectSaved],
    (saved) => saved.savedAlbums
);

export const selectSavedArtists = createSelector(
    [selectSaved],
    (saved) => saved.savedArtists
)

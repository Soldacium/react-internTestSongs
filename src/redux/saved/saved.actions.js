import SavedActionTypes from './saved.types';

export const saveAlbum = (album) => ({
    type: SavedActionTypes.SAVE_ALBUM,
    payload: album
});

export const saveArtist = (artist) => ({
    type: SavedActionTypes.SAVE_ARTIST,
    payload: artist
});

export const unsaveAlbum = (album) => ({
    type: SavedActionTypes.UNSAVE_ALBUM,
    payload: album
});

export const unsaveArtist = (artist) => ({
    type: SavedActionTypes.UNSAVE_ARTIST,
    payload: artist
});
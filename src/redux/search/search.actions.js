import SearchActionTypes from './search.types'

export const setAlbums = albums => ({
    type: SearchActionTypes.SET_ALBUMS,
    payload: albums
});

export const setArtists = artists => ({
    type: SearchActionTypes.SET_ARTISTS,
    payload: artists
});

export const setViewedArtist = artist => ({
    type: SearchActionTypes.SET_VIEWED_ARTIST,
    payload: artist
});

export const setViewedAlbum = album => ({
    type: SearchActionTypes.SET_VIEWED_ALBUM,
    payload: album
});
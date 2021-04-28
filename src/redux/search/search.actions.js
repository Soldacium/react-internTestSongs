import SearchActionTypes from './search.types'

export const searchAlbums = albums => ({
    type: SearchActionTypes.SEARCH_ALBUMS,
    payload: albums
});

export const searchArtists = artists => ({
    type: SearchActionTypes.SEARCH_ARTISTS,
    payload: artists
});

export const searchAll = name => ({
    type: SearchActionTypes.SEARCH_ALL,
    payload: name
});
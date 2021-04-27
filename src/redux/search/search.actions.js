import SearchActionTypes from './search.types'

export const searchAlbums = albumName => ({
    type: SearchActionTypes.SEARCH_ALBUMS,
    payload: albumName
});

export const searchArtists = artistName => ({
    type: SearchActionTypes.SEARCH_ARTISTS,
    payload: artistName
});

export const searchAll = name => ({
    type: SearchActionTypes.SEARCH_ALL,
    payload: name
});
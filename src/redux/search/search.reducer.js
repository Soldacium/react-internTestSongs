import  SearchActionTypes  from './search.types';

const INITIAL_STATE = {
    searchedAlbums: [],
    searchedArtists: [],
    viewedArtist: {},
    viewedAlbum: [],
    query: '',
    loading: false
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SearchActionTypes.SET_ALBUMS:
            return {
                ...state,
                searchedAlbums: action.payload
            }
        case SearchActionTypes.SET_ARTISTS:
            return {
                ...state,
                searchedArtists: action.payload
            }
        case SearchActionTypes.SET_VIEWED_ALBUM:
            return {
                ...state,
                viewedAlbum: action.payload
            }
        case SearchActionTypes.SET_VIEWED_ARTIST:
            return {
                ...state,
                viewedArtist: action.payload
            }
        default:
            return state;
    }
}

export default searchReducer;
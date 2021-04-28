import  SearchActionTypes  from './search.types';

const INITIAL_STATE = {
    searchedAlbums: [],
    searchedArtists: [],
    query: '',
    loading: false
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SearchActionTypes.SEARCH_ALBUMS:
            return {
                ...state,
                searchedAlbums: action.payload
            }
        case SearchActionTypes.SEARCH_ARTISTS:
            return {
                ...state,
                searchedArtists: action.payload
            }
        default:
            return state;
    }
}

export default searchReducer;
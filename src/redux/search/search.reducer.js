// import  SearchActionTypes  from './search.types';

const INITIAL_STATE = {
    searchedAlbums: [],
    searchedArtists: [],
    mode: 'albums'
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default searchReducer;
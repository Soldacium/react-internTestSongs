import  SavedActionTypes  from './saved.types'

const INITIAL_STATE = {
    savedAlbums: [],
    savedArtists: []
}

const savedReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SavedActionTypes.SAVE_ALBUM:
            return {
                ...state,
                savedAlbums: [...state.savedAlbums, action.payload]
            }
        case SavedActionTypes.UNSAVE_ALBUM:
            return {
                ...state,
                savedAlbums: state.savedAlbums.filter(album => 
                    album.artistId !== action.payload.artistId
                )
            }
        case SavedActionTypes.SAVE_ARTIST:
            return {
                ...state,
                savedArtists: [...state.savedArtists, action.payload]
            }
        case SavedActionTypes.UNSAVE_ARTIST:
            return {
                ...state,
                savedArtists: state.savedArtists.filter(artist => 
                    artist.id !== action.payload.id
                )
            }
        default:
            return state;
    }
}

export default savedReducer;
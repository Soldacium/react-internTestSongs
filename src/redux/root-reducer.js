import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'; //for window storage, another for session storage
import savedReducer from './saved/saved.reducer';
import searchReducer from './search/search.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['saved'] //persist only saved
}

const rootReducer = combineReducers({
    search: searchReducer,
    saved: savedReducer
})

export default persistReducer(persistConfig, rootReducer)
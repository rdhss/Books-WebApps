/* eslint-disable no-unused-vars */
import { legacy_createStore as createStore , applyMiddleware} from 'redux'
import rootReducer from './reducer'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
};

let persistedReducer = persistReducer(persistConfig, rootReducer);

export let store = createStore(persistedReducer, applyMiddleware(thunk));
export let persistor = persistStore(store);


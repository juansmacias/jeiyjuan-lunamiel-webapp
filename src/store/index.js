import thunk from 'redux-thunk'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import promiseMiddleware from 'redux-promise-middleware'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore,persistReducer } from 'redux-persist'

import userReducer from 'reducers/user'
import citiesReducer from 'reducers/cities'
import giftsReducer from 'reducers/myGifts'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    user:persistedReducer,
    cities: citiesReducer,
    myGifts: giftsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,promiseMiddleware,thunk),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import promiseMiddleware from 'redux-promise-middleware'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore,persistReducer, FLUSH, REHYDRATE, PAUSE, 
  PERSIST, PURGE, REGISTER } from 'redux-persist'

import userReducer from 'reducers/user'
import citiesReducer from 'reducers/cities'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    user:persistedReducer,
    cities: citiesReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,promiseMiddleware,thunk),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

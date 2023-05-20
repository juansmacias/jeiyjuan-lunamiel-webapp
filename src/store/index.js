import thunk from 'redux-thunk'
import logger from 'redux-logger'
import storage from 'redux-persist/lib/storage'
import promiseMiddleware from 'redux-promise-middleware'
import { configureStore } from '@reduxjs/toolkit'
import { persistStore,persistReducer } from 'redux-persist'

import userReducer from 'reducers/user'
import citiesReducer from 'reducers/cities'
import giftsReducer from 'reducers/myGifts'
import alertsReducer from 'reducers/alerts'

import { setAlert } from 'reducers/alerts'

const persistConfig = {
  key: 'root',
  storage,
}

const errorInterceptor =  (store) => (next) => (action) => {
  const {dispatch} = store
  if (action.error) {{
    dispatch(setAlert({
      id:Math.floor(Math.random() * 9999),
      type:'error',
      message:'Erorr en el sistema. Intente de nuevo.',
      duration:5000
    }))
    console.log('Rejected action:', action);

  }
  }
  return next(action);
};

const persistedReducer = persistReducer(persistConfig, userReducer)

export const store = configureStore({
  reducer: {
    user:persistedReducer,
    cities: citiesReducer,
    myGifts: giftsReducer,
    alerts:alertsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,promiseMiddleware,thunk,errorInterceptor),
  devTools: process.env.NODE_ENV !== 'production',
})

export const persistor = persistStore(store)

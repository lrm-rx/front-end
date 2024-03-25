import { configureStore } from '@reduxjs/toolkit'
import type { Reducer, AnyAction } from '@reduxjs/toolkit'
import usersReducer from './modules/users'
import signsReducer from './modules/signs'
import type { UsersState } from './modules/users'
import type { PersistPartial } from 'redux-persist/es/persistReducer'
import {
  persistStore,
  persistReducer,
  // FLUSH,
  // REHYDRATE,
  // PAUSE,
  // PERSIST,
  // PURGE,
  // REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { useDispatch } from 'react-redux'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['token']
}

const store = configureStore({
  reducer: {
    users: persistReducer(persistConfig, usersReducer) as Reducer<UsersState & PersistPartial, AnyAction>,
    signs: signsReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false
    }),
})
persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;
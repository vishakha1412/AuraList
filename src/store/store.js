import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todoSlice.js';
import { persistStore, persistReducer } from 'redux-persist';
 
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
 
const persistConfig = {
  key: 'todo',
  storage,
};

const persistedTodoReducer = persistReducer(persistConfig, todoReducer);
export const store = configureStore({
  reducer: {
    todo: persistedTodoReducer, // same key as before: 'todo'
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

 
export const persistor = persistStore(store);
export default store;


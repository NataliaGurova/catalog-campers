import { configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./advertsSlice";


import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'



// Налаштування для redux-persist
const persistConfig = {
  key: "favorites", // ключ для зберігання у LocalStorage
  storage, // тип сховища
  whitelist: ["item"], // список ред'юсерів, які мають бути персистовані
};

const persistedReducer = persistReducer(persistConfig, advertsReducer);
export const store = configureStore({
  reducer: {
    
    adverts: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


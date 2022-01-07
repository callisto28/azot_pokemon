/**
 * import module redux-toolkit
 */
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
/**
 * import call api
 */
import { pokemonApi } from '../service/Getpokemon';

export const Store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(pokemonApi.middleware),
});

setupListeners(Store.dispatch);

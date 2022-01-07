/**
 * Call the pokemon api and get all pokemon
 */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Poketype } from '../types/Poketype';
import { Poket } from '../types/Poket';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Poketype, string>({
      query: () => 'pokemon?limit=120',
    }),
    getPokemon: builder.query<Poket, string>({
      query: (id) => `pokemon/${id}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetPokemonQuery } = pokemonApi;

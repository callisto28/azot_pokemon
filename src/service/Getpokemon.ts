import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Poketype } from "../types/Poketype";

export const pokemonApi = createApi({
  reducerPath: "pokemonApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Poketype, string>({
      query: () => `pokemon?limit=60`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;

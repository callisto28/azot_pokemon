import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Poketype } from "../types/Poketype";

export const getPokemon = createApi({
  reducerPath: "getPokemon",
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/pokemon" }),
  endpoints: (builder) => ({
    getPokemons: builder.query<Poketype, string>({
      query: () => `?limit=10`,
    }),
  }),
});
export const { useGetPokemonsQuery } = getPokemon;

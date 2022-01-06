export type Poketype = {
  id: number;
  name: string;
  image: string;
  species: {
    name: string;
  };
  results: {
    name: string;
  };
  sprites: {
    front_shiny: string;
    front_default: string;
    back_default: string;
  };
};

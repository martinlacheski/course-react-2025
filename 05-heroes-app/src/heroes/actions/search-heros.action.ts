import { heroApi } from "../api/hero.api";
import type { Hero } from "../types/hero.interface";

const VITE_API_URL = import.meta.env.VITE_API_URL;

interface Options {
  name?: string;
  team?: string;
  category?: string;
  universe?: string;
  status?: string;
  strength?: string;
  sort?: string;
}

export const searchHeroesAction = async (options: Options = {}) => {
  const { name, team, category, universe, status, strength, sort } = options;

  if (
    !name &&
    !team &&
    !category &&
    !universe &&
    !status &&
    !strength &&
    !sort
  ) {
    return [];
  }

  const { data } = await heroApi.get<Hero[]>("/search", {
    params: {
      name,
      team,
      category,
      universe,
      status,
      strength,
    },
  });

  const heroes = data.map((hero) => ({
    ...hero,
    image: `${VITE_API_URL}/images/${hero.image}`,
  }));

  if (sort === "asc") {
    heroes.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "desc") {
    heroes.sort((a, b) => b.name.localeCompare(a.name));
  }

  return heroes;
};

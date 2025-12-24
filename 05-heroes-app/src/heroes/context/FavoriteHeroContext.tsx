import { createContext } from "react";
import type { Hero } from "../types/hero.interface";

interface FavoriteHeroContext {
  // State
  favorites: Hero[];
  favoriteCount: number;

  // Methods
  isFavorite: (hero: Hero) => boolean;
  toggleFavorite: (hero: Hero) => void;
}

export const FavoriteHeroContext = createContext({} as FavoriteHeroContext);

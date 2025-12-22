import { useRef, useState } from "react";
import { getGifsByQuery } from "../actions/get-gifs-by-query.actions";
import type { Gif } from "../interfaces/gif.interface";

// Crear estado para la cache
// const gifsCache: Record<string, Gif[]> = {};

export const useGifs = () => {
  // Crear estado para los gifs
  const [gifs, setGifs] = useState<Gif[]>([]);

  // Crear estado para las busquedas anteriores
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  // Crear estado para la cache
  const gifsCache = useRef<{ [key: string]: Gif[] }>({});

  // Crear funcion para manejar el clic en un termino
  const handleClick = async (search: string) => {
    if (gifsCache.current[search]) {
      setGifs(gifsCache.current[search]);
      return;
    }

    const gifs = await getGifsByQuery(search);
    setGifs(gifs);

    // Guardar gifs en la cache
    gifsCache.current[search] = gifs;
    console.log(gifsCache.current);
  };

  // Crear funcion para manejar la busqueda
  const handleSearch = async (search: string) => {
    // Quitar espacios y convertir a minusculas
    search = search.trim().toLowerCase();

    // Validar que la busqueda no sea vacia
    if (search.length === 0) return;

    // Validar que la busqueda no sea repetida
    if (previousSearches.includes(search)) return;

    // Agregar la busqueda al estado de busquedas anteriores
    setPreviousSearches([search, ...previousSearches].slice(0, 8));

    // Buscar gifs
    const gifs = await getGifsByQuery(search);
    setGifs(gifs);

    // Guardar gifs en la cache
    gifsCache.current[search] = gifs;
    console.log(gifsCache.current);
  };

  return {
    // Properties
    gifs,

    // Methods
    previousSearches,
    handleClick,
    handleSearch,
  };
};

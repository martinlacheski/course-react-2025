import { useState } from "react";
import { GifList } from "./gifs/components/GifList";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { mockGifs } from "./mock-data/gifs.mock";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  // Crear estado para las busquedas anteriores
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);
  // Crear funcion para manejar la busqueda
  const handleSearch = (search: string) => {
    setPreviousSearches([search, ...previousSearches].slice(0, 8));
  };

  return (
    <>
      {/* Header */}
      <CustomHeader
        title="Buscador de gifs"
        description="Descubre y comparte el gif perfecto"
      />
      {/* Busqueda */}
      <SearchBar placeholder="Buscar Gifs" onSearch={handleSearch} />
      {/* Busquedas anteriores */}
      <PreviousSearch
        previousSearches={previousSearches}
        onSearch={handleSearch}
      />
      {/* Lista de gifs */}
      {/* Gifs List: Props => gifs: Gif[] */}
      <GifList gifs={mockGifs} />
    </>
  );
};

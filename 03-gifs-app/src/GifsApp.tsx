import { GifList } from "./gifs/components/GifList";
import { PreviousSearch } from "./gifs/components/PreviousSearch";
import { useGifs } from "./gifs/hooks/useGifs";
import { CustomHeader } from "./shared/components/CustomHeader";
import { SearchBar } from "./shared/components/SearchBar";

export const GifsApp = () => {
  const { gifs, previousSearches, handleClick, handleSearch } = useGifs();

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
        onSearch={handleClick}
      />
      {/* Busqueda de terminos anteriores */}

      {/* Lista de gifs */}
      {/* Gifs List: Props => gifs: Gif[] */}
      <GifList gifs={gifs} />
    </>
  );
};

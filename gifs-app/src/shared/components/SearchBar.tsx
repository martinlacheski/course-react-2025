import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  previousSearches?: string[];
}

export const SearchBar = ({
  placeholder = "Buscar",
  onSearch,
}: SearchBarProps) => {
  const [search, setSearch] = useState("");
  const [previousSearches, setPreviousSearches] = useState<string[]>([]);

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     onSearch?.(search);
  //   }, 500);

  //   return () => clearTimeout(timeout);

  //   // onSearch?.(search);

  //   // console.log(search);
  // }, [search, onSearch]);

  const handleSearch = (search: string) => {
    //convertir a minusculas
    search = search.toLowerCase();

    // si esta vacio retornar
    if (search.trim() === "") return;

    //Evitar busquedas repetidas
    if (previousSearches?.includes(search)) return;

    //Limitar a 8 busquedas
    setPreviousSearches([search, ...previousSearches].slice(0, 8));

    onSearch?.(search);
    setSearch("");
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch(search);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={() => handleSearch(search)}>Buscar</button>
    </div>
  );
};

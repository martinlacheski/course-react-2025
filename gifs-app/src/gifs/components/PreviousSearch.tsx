interface PreviousSearchProps {
  previousSearches: string[];
  onSearch: (search: string) => void;
}

export const PreviousSearch = ({
  previousSearches,
  onSearch,
}: PreviousSearchProps) => {
  return (
    <div className="previous-searches">
      <h2>Busquedas previas</h2>
      <ul className="previous-searches-list">
        {previousSearches.map((search) => (
          <li key={search} onClick={() => onSearch(search)}>
            {search}
          </li>
        ))}
      </ul>
    </div>
  );
};

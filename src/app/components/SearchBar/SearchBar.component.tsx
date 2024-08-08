import { FC, useCallback } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  const handleSearch = useCallback(() => {
    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm) {
      const newUrl = `${window.location.pathname}?search=${encodeURIComponent(trimmedSearchTerm)}`;
      window.history.pushState({}, '', newUrl); // Update URL without reloading
    }
  }, [searchTerm]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") handleSearch();
  };

  return (
    <div className="mt-6">
      <div className="flex">
        <input
          type="search"
          name="search"
          value={searchTerm}
          onChange={onSearchChange}
          onKeyDown={handleKeyDown}
          placeholder="Buscar por personagens..."
          className="border-[3px] rounded-xl border-[#F4A300] p-2 w-full outline-none"
        />
        <button onClick={handleSearch} className="ml-2 p-2 bg-[#f4A300] text-white font-bold rounded-xl">Buscar</button>
      </div>
    </div>
  );
};

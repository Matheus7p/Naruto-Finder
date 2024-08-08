import { FC } from 'react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchBar: FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="p-4">
      <input 
        type="search" 
        name="search" 
        value={searchTerm}
        onChange={onSearchChange}
        placeholder="Procurar personagens..."
        className="border-[3px] rounded-xl border-[#F4A300] p-2 w-full outline-none"
      />
    </div>
  );
};
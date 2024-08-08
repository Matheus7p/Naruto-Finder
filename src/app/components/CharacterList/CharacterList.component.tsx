import { FC, useState, useEffect } from 'react';
import CharacterCard from '@/app/components/CharacterCard/CharacterCard.component';
import useInfiniteScroll from '@/app/hooks/useInfiniteScroll';
import LoadingNaruto from '@/app/components/LoadingNaruto/LoadingNaruto.component';
import { SearchBar } from '@/app/components/SearchBar/SearchBar.component';
import { useCharacter } from '@/app/hooks/useCharacter';

const CharacterList: FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { characters, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useCharacter(searchTerm);
  const [hasLoaded, setHasLoaded] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const lastCharacterElementRef = useInfiniteScroll(
    () => {
      if (!isLoading && !isFetchingNextPage && hasNextPage) {
        fetchNextPage();
      }
    },
    [isLoading, isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    if (!isLoading && !isFetchingNextPage) {
      setHasLoaded(true);
    }
  }, [isLoading, isFetchingNextPage]);

  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <div className="flex flex-wrap justify-center">
        {isLoading && <LoadingNaruto />}
        {hasLoaded && characters.length > 0 ? (
          characters.map((character, index) => (
            <div
              key={character.name}
              ref={index === characters.length - 1 ? lastCharacterElementRef : null}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
            >
              <CharacterCard name={character.name} image={character.images[0]} />
            </div>
          ))
        ) : null}
        {(isLoading || isFetchingNextPage) && hasLoaded && <LoadingNaruto />}
      </div>
    </div>
  );
};

export default CharacterList;

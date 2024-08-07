import { FC } from 'react';
import CharacterCard from '@/app/components/CharacterCard/CharacterCard.component';
import useInfiniteScroll from '@/app/hooks/useInfiniteScroll';
import { ICharacter } from '@/domain/models/CharacterModel';

interface CharacterListProps {
  characters: ICharacter[];
  fetchNextPage: () => void;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isLoading: boolean;
  error: any;
}

const CharacterList: FC<CharacterListProps> = ({
  characters,
  fetchNextPage,
  hasNextPage,
  isFetchingNextPage,
  isLoading,
  error,
}) => {
  const lastCharacterElementRef = useInfiniteScroll(
    () => {
      if (!isLoading && !isFetchingNextPage && hasNextPage) {
        fetchNextPage();
      }
    },
    [isLoading, isFetchingNextPage, fetchNextPage, hasNextPage]
  );

  if (error) return <div>Error: {(error as Error).message}</div>;

  return (
    <div className="flex flex-wrap">
      {characters.map((character, index) => (
        <div
          key={character.name}
          ref={index === characters.length - 1 ? lastCharacterElementRef : null}
        >
          <CharacterCard name={character.name} image={character.images[0]} />
        </div>
      ))}
      {(isLoading || isFetchingNextPage) && <div>Loading...</div>}
    </div>
  );
};

export default CharacterList;

"use client";

import { useCharacter } from "@/app/hooks/useCharacter";
import CharacterCard from "../CharacterCard/CharacterCard.component";
import { ICharacter } from "@/domain/interfaces/CharacterModel";

const CharacterList = () => {
  const { data, isLoading, error } = useCharacter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {(error as Error).message}</div>;

  const characters: ICharacter[] = data?.characters || [];

  return (
    <div>
      {characters.map((character) => (
          <CharacterCard 
            key={character.name}
            name={character.name}
            image={character.images[0]}
          />
        ))}
    </div>
  );
};

export default CharacterList;
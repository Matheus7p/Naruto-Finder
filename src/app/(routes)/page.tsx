"use client";

import CharacterList from "../components/CharacterList/CharacterList.component";
import { useCharacter } from "../hooks/useCharacter";

export default function Home() {

  const {
    characters,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useCharacter();

  return (
    <div>
      <div className="flex justify-center">
        <img src="/logo.png" alt="" />
      </div>
      <CharacterList
      characters={characters}
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isFetchingNextPage={isFetchingNextPage}
      isLoading={isLoading}
      error={error}
    />
    </div>
  );
}

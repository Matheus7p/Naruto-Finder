import { useInfiniteQuery, QueryFunctionContext, QueryKey } from "@tanstack/react-query";
import axios from "axios";
import { ICharacterResponse } from "@/domain/models/CharacterModel";

const API_URL = "https://dattebayo-api.onrender.com/characters";

const fetchCharacters = async ({ queryKey, pageParam = 1 }: QueryFunctionContext<QueryKey>): Promise<ICharacterResponse> => {
  const [_key, searchTerm] = queryKey;
  const response = await axios.get<ICharacterResponse>(`${API_URL}?page=${pageParam}&name=${searchTerm}`);
  return response.data;
}

export function useCharacter(searchTerm: string) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    error,
  } = useInfiniteQuery<ICharacterResponse>({
    queryFn: fetchCharacters,
    queryKey: ['character-data', searchTerm],
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.characters.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  const characters = data?.pages.flatMap((page) => page.characters) || [];

  return { characters, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error };
}

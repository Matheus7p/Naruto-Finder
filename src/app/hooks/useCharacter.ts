import { ICharacterResponse } from "@/domain/interfaces/CharacterModel";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://dattebayo-api.onrender.com/characters";

const fetchCharacter = async (): Promise<ICharacterResponse> => {
    const response = await axios.get<ICharacterResponse>(API_URL);
    return response.data;
}

export function useCharacter() {
    const query = useQuery<ICharacterResponse>({
        queryFn: fetchCharacter,
        queryKey: ['character-data']
    });

    return query
}

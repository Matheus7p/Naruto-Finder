export interface ICharacter {
    name: string;
    images: string[];
}

export interface ICharacterResponse {
    characters: ICharacter[]
}
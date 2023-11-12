export interface Pokemon {
    id: number;
    name: string;
    image: string;
    isUnlocked: boolean;
    abilities: PokemonAbility[];
    base_experience: number;
    forms: PokemonSpecies[];
    height: number;
    moves: PokemonMove[];
    order: number;
    sprites: PokemonSprite;
    stats: PokemonStat[];
    types: PokemonType[];
    weight: number;
}

export interface PokemonAbility {
    ability: PokemonSpecies;
    is_hidden: boolean;
    slot: number;
}

export interface PokemonSpecies {
    name: string;
    url: string;
}

export interface PokemonMove {
    move: PokemonSpecies;
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: PokemonSpecies;
}

export interface PokemonSprite {
    other: {
        dream_world: {
            front_default: string;
        }
    }
}

export type PokemonTypeName =
    "bug"
    | "dark"
    | "dragon"
    | "electric"
    | "fairy"
    | "fighting"
    | "fire"
    | "flying"
    | "ghost"
    | "grass"
    | "ground"
    | "ice"
    | "normal"
    | "poison"
    | "psychic"
    | "rock"
    | "steel"
    | "water";

export interface PokemonType {
    slot: number;
    type:
    {
        name: PokemonTypeName;
        url: string;
    };
}

export interface SafePokemonType {
    name: string;
    image: string;
    color: string;
}
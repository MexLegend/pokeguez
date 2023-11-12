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
    species: PokemonSpecies;
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

export interface PokemonSpeciesEvolution {
    evolution_chain: {
        url: string;
    };
    genera: PokemonGenera[];
}

export interface PokemonGenera {
    genus: string;
    language: {
        name: string;
        url: string;
    }
}

export interface PokemonEvolutionsAndCategory {
    evolutions: PokemonEvolution[];
    category: string;
}

export interface PokemonEvolution {
    id: string;
    name: string;
    minLevel: number;
    triggerName: string | null;
    item: string | null;
}

export interface PokemonEvolutionChain {
    chain: PokemonEvolutionChainEvolves;
}

export interface PokemonEvolutionChainEvolves {
    evolution_details: EvolutionDetail[];
    evolves_to: PokemonEvolutionChainEvolves[];
    species: PokemonSpecies;
}

export interface EvolutionDetail {
    item: null;
    min_level: number;
    trigger: PokemonSpecies;
}

export interface PokemonMove {
    move: PokemonSpecies;
}

export interface PokemonStat {
    base_stat: number;
    effort: number;
    stat: PokemonSpecies;
}

export type PokemonStatName = "hp" | "attack" | "defense" | "special-attack" | "special-defense" | "speed";

export interface PokemonSafeStat {
    name: string;
    value: number;
    maxValue: number;
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
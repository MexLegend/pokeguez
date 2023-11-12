
export interface Pokedex {
    count: number;
    next: string;
    previous: null;
    results: PokedexResponse[];
}

export interface PokedexResponse {
    name: string;
    url: string;
}

export interface GetPokedexParams {
    limit: number;
    offeset?: number;
}
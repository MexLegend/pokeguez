const POKEMON_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world";

export function getPokemonImage(pokemonId: string): string {
    return `${POKEMON_IMAGE_URL}/${pokemonId}.svg`
};

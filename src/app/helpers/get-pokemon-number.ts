
export function getPokemonNumber(pokemonId: string): string {
    return (String(pokemonId).padStart(3, '0'));
}
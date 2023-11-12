import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetPokedexParams, Pokedex } from '../interfaces/pokedex';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { Pokemon, PokemonEvolution, PokemonEvolutionChain, PokemonEvolutionChainEvolves, PokemonEvolutionsAndCategory, PokemonSpeciesEvolution } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly POKEMON_API = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }

  getPokedex({ limit, offeset }: GetPokedexParams): Observable<Pokemon[]> {

    const url = `${this.POKEMON_API}/?limit=${limit}&offset=${offeset ?? 0}`;

    return this.http.get<Pokedex>(url).pipe(mergeMap((resp) => {
      const pokemonsObservables = forkJoin(resp.results.map(resp => this.http.get<Pokemon>(resp.url)));
      return pokemonsObservables;
    }
    ));
  }

  getPokemonEvolutionsAndCategory(pokemonSpecieUrl: string): Observable<PokemonEvolutionsAndCategory> {
    return this.http.get<PokemonSpeciesEvolution>(pokemonSpecieUrl).pipe(mergeMap(({ evolution_chain: { url }, genera }) => {

      const category = genera.find(g => g.language.name === 'en');

      return this.http.get<PokemonEvolutionChain>(url).pipe(map(({ chain }) => ({
        category: category!.genus.replace("Pokémon", "").trim(),
        evolutions: this.getEvolutions(chain)
      })))
    }));
  }

  getEvolutions(pokemonEvolutionChain: PokemonEvolutionChainEvolves): PokemonEvolution[] {
    const evolutions: PokemonEvolution[] = [];

    do {
      const evolutionDetails = pokemonEvolutionChain.evolution_details[0];

      evolutions.push({
        id: this.getIdFromUrl(pokemonEvolutionChain.species.url),
        name: pokemonEvolutionChain.species.name,
        minLevel: evolutionDetails?.min_level || 1,
        triggerName: evolutionDetails?.trigger?.name || null,
        item: evolutionDetails?.item || null
      });

      pokemonEvolutionChain = pokemonEvolutionChain.evolves_to[0];
    } while (!!pokemonEvolutionChain && !!pokemonEvolutionChain.evolves_to);

    return evolutions;
  }

  getIdFromUrl(pokemonSpecieUrl: string): string {
    const segments = pokemonSpecieUrl.split('/');
    return segments[segments.length - 2];
  }

}

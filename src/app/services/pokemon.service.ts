import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetPokedexParams, Pokedex } from '../interfaces/pokedex';
import { Observable, forkJoin, map, mergeMap } from 'rxjs';
import { Pokemon } from '../interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  POKEMON_API = "https://pokeapi.co/api/v2/pokemon";
  POKEMON_IMAGE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world"

  constructor(private http: HttpClient) { }

  getPokedex({ limit, offeset }: GetPokedexParams): Observable<Pokemon[]> {

    const url = `${this.POKEMON_API}/?limit=${limit}&offset=${offeset ?? 0}`;

    return this.http.get<Pokedex>(url).pipe(mergeMap((resp) => {
      const pokemonsObservables = forkJoin(resp.results.map(resp => this.http.get<Pokemon>(resp.url)));
      return pokemonsObservables;
    }
      // ({
      //   ...resp,
      //   results: resp.results.map(pokemon => {

      //     const pokemonId = this.extractIdFromUrl(pokemon.url!);


      //     return {
      //       ...pokemon,
      //       image: `${this.POKEMON_IMAGE_URL}/${pokemonId}.svg`,
      //       id: +pokemonId 
      //     }
      //   })
      // })
    ));
  }

  extractIdFromUrl(url: string): string {
    const segments = url.split('/');
    return segments[segments.length - 2];
  }

  getPokemon(pokemonUrl: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(pokemonUrl);
  }

}

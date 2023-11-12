import { Component, WritableSignal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, PokemonCardComponent],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
  host: { class: 'tw-w-full' }
})
export class PokedexComponent {

  pokemons: WritableSignal<Pokemon[]> = signal([
    // {
    //   id: 1,
    //   name: "Bulbasaur",
    //   image: "assets/images/bulbasaur.svg",
    //   url: "",
    //   isUnlocked: true
    // },
    // {
    //   id: 1,
    //   name: "Bulbasaur",
    //   image: "assets/images/bulbasaur.svg",
    //   url: "",
    //   isUnlocked: false
    // },
    // {
    //   id: 1,
    //   name: "Bulbasaur",
    //   image: "assets/images/bulbasaur.svg",
    //   url: "",
    //   isUnlocked: false
    // }
  ]);

  constructor(private pokemonService: PokemonService) {
    const getPokedexSub$ = this.pokemonService.getPokedex({
      limit: 12
    }).subscribe((pokemons) => {
      pokemons[0].isUnlocked = true;
      pokemons[4].isUnlocked = true;
      pokemons[8].isUnlocked = true;
      this.pokemons.set(pokemons)
      getPokedexSub$.unsubscribe();
    });
  }

}

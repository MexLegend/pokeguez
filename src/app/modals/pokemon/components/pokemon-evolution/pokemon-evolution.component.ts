import { Component, Input, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSectionInfoComponent } from '../pokemon-section-info/pokemon-section-info.component';
import { PokemonEvolution } from '../../../../interfaces/pokemon';
import { getPokemonImage } from 'src/app/helpers/get-pokemon-image';
import { getPokemonNumber } from 'src/app/helpers/get-pokemon-number';

@Component({
  selector: 'app-pokemon-evolution',
  standalone: true,
  imports: [CommonModule, PokemonSectionInfoComponent],
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.scss']
})
export class PokemonEvolutionComponent {

  @Input() pokemonEvolution!: PokemonEvolution;

  pokemonEvolutionNumber: Signal<string> = computed(() => getPokemonNumber(this.pokemonEvolution.id));
  pokemonEvolutionImage: Signal<string> = computed(() => getPokemonImage(this.pokemonEvolution.id));

}

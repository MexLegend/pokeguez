import { Component, Input, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonStatComponent } from '../pokemon-stat/pokemon-stat.component';
import { PokemonSafeStat, PokemonStat, PokemonStatName } from 'src/app/interfaces/pokemon';

@Component({
  selector: 'app-pokemon-stats-list',
  standalone: true,
  imports: [CommonModule, PokemonStatComponent],
  templateUrl: './pokemon-stats-list.component.html',
  styleUrls: ['./pokemon-stats-list.component.scss']
})
export class PokemonStatsListComponent {

  @Input() pokemonStats!: PokemonStat[];

  baseStats: Signal<PokemonSafeStat[]> = computed(() => this.getBaseStats());

  getBaseStats(): PokemonSafeStat[] {
    return this.pokemonStats.map(stat => {
      const { name, maxValue } = this.getBaseStatData(stat.stat.name as PokemonStatName);
      return {
        name,
        value: stat.base_stat,
        maxValue
      }
    })
  }

  getBaseStatData(pokemonStatName: PokemonStatName): { name: string, maxValue: number } {
    switch (pokemonStatName) {
      case "hp": return { name: 'HP', maxValue: 250 };
      case "attack": return { name: 'Attack', maxValue: 134 };
      case "defense": return { name: 'Defense', maxValue: 180 };
      case "special-attack": return { name: 'Sp. Atk.', maxValue: 154 };
      case "special-defense": return { name: 'Sp. Def.', maxValue: 130 };
      default: return { name: 'Speed', maxValue: 140 };
    }
  }

}

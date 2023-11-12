import { Component, Input, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon-stat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon-stat.component.html',
  styleUrls: ['./pokemon-stat.component.scss']
})
export class PokemonStatComponent {

  @Input() label!: string;
  @Input() value!: number;
  @Input() maxValue!: number;

  statBarPercentage: Signal<number> = computed(() => this.getStatBarPercentage());

  /**
   * First calculate the base percentage of the "value" over the "maxValue" as 100%
   * Then calculate the final percentage of the "basePercentage" over the 15 bars as 100%
   */
  getStatBarPercentage(): number {
    const basePercentage = this.value * 100 / this.maxValue;
    const finalPercentage = basePercentage * 15 / 100;
    return Math.floor(finalPercentage);
  }

}

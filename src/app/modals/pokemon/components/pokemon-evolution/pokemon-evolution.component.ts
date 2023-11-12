import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonSectionInfoComponent } from '../pokemon-section-info/pokemon-section-info.component';

@Component({
  selector: 'app-pokemon-evolution',
  standalone: true,
  imports: [CommonModule, PokemonSectionInfoComponent],
  templateUrl: './pokemon-evolution.component.html',
  styleUrls: ['./pokemon-evolution.component.scss']
})
export class PokemonEvolutionComponent {

}

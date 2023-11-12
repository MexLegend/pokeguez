import { Component, Inject, Input, Signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonType, SafePokemonType } from 'src/app/interfaces/pokemon';
import { PokemonTypePipe } from 'src/app/pipes/pokemon-type.pipe';

@Component({
  selector: 'app-pokemon-type-tag',
  standalone: true,
  imports: [CommonModule, PokemonTypePipe],
  providers: [PokemonTypePipe],
  templateUrl: './pokemon-type-tag.component.html',
  styleUrls: ['./pokemon-type-tag.component.scss']
})
export class PokemonTypeTagComponent {

  @Input() type!: PokemonType;
  @Input() customClasses!: string;

  constructor(private pokemonTypePipe: PokemonTypePipe) { }

  safePokemonType: Signal<SafePokemonType> = computed(() => this.pokemonTypePipe.transform(this.type))

}

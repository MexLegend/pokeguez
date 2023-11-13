import { Component, EventEmitter, Input, Signal, WritableSignal, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAction, ModalService } from 'src/app/services/modal.service';
import { Pokemon, PokemonEvolution } from 'src/app/interfaces/pokemon';
import { PokemonTypeTagComponent } from 'src/app/components/pokedex/components/pokemon-type-tag/pokemon-type-tag.component';
import { PokemonSectionInfoComponent } from './components/pokemon-section-info/pokemon-section-info.component';
import { PokemonEvolutionComponent } from './components/pokemon-evolution/pokemon-evolution.component';
import { PokemonStatComponent } from './components/pokemon-stat/pokemon-stat.component';
import { PokemonService } from '../../services/pokemon.service';
import { getPokemonNumber } from 'src/app/helpers/get-pokemon-number';
import { PokemonStatsListComponent } from './components/pokemon-stats-list/pokemon-stats-list.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

export interface PokemoneDialogData {
  action: ModalAction;
  title: string;
  pokemon: Pokemon;
}

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [
    CommonModule,
    PokemonTypeTagComponent,
    PokemonSectionInfoComponent,
    PokemonEvolutionComponent,
    PokemonStatsListComponent,
    NgxSkeletonLoaderModule
  ],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  @Input() data!: PokemoneDialogData;
  @Input() onCloseEmitter!: EventEmitter<any>;

  pokemonNumber: Signal<string> = computed(() => getPokemonNumber(this.data.pokemon.id.toString()));
  pokemonCategory: WritableSignal<string> = signal("");
  pokemonEvolutions: WritableSignal<PokemonEvolution[]> = signal([]);
  isLoading: boolean = true;

  constructor(
    private modalService: ModalService,
    private pokemonService: PokemonService
  ) { }

  handleClose(data?: any) {
    this.modalService.toggleModal.emit(false);
    this.onCloseEmitter.emit(data)
  }

  ngAfterViewInit(): void {
    this.getPokemonEvolutionsAndCategory();
  }

  getPokemonEvolutionsAndCategory() {
    const getPokemonEvolutionsAndCategorySub$ = this.pokemonService.getPokemonEvolutionsAndCategory(this.data.pokemon.species.url)
      .subscribe(({ category, evolutions }) => {
        this.pokemonEvolutions.set(evolutions);
        this.pokemonCategory.set(category);
        this.isLoading = false;
        getPokemonEvolutionsAndCategorySub$.unsubscribe();
      })
  }

}

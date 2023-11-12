import { Component, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalAction, ModalService } from 'src/app/services/modal.service';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonTypeTagComponent } from 'src/app/components/pokedex/components/pokemon-type-tag/pokemon-type-tag.component';
import { PokemonSectionInfoComponent } from './components/pokemon-section-info/pokemon-section-info.component';
import { PokemonEvolutionComponent } from './components/pokemon-evolution/pokemon-evolution.component';
import { PokemonStatComponent } from './components/pokemon-stat/pokemon-stat.component';

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
    PokemonStatComponent
  ],
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent {

  @Input() data!: PokemoneDialogData;
  @Input() onCloseEmitter!: EventEmitter<any>;

  constructor(
    private modalService: ModalService
  ) { }

  handleClose(data?: any) {
    this.modalService.toggleModal.emit(false);
    this.onCloseEmitter.emit(data)
  }


}

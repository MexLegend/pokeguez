import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pokemon } from 'src/app/interfaces/pokemon';
import { PokemonTypeTagComponent } from '../pokemon-type-tag/pokemon-type-tag.component';
import { ModalService } from 'src/app/services/modal.service';
import { PokemonComponent } from 'src/app/modals/pokemon/pokemon.component';

@Component({
  selector: 'app-pokemon-card',
  standalone: true,
  imports: [CommonModule, PokemonTypeTagComponent],
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  @Input() pokemon!: Pokemon;

  constructor(private modalService: ModalService) { }

  handleOpenPokemonDialog() {
    const onClose = this.modalService.setModalData({
      component: PokemonComponent,
      title: "Pokédex",
      data: {
        action: 'Read',
        pokemon: this.pokemon
      },
      customClasses: "tw-max-w-[400px]",
      enableClose: false,
      closeModalButton: true
    });

    const onCloseSub$ = onClose.subscribe(res => {
      console.log(res);

      onCloseSub$.unsubscribe();
    });

  }

}

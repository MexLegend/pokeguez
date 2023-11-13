import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-pokemon-section-info',
  standalone: true,
  imports: [CommonModule, NgxSkeletonLoaderModule],
  templateUrl: './pokemon-section-info.component.html',
  styleUrls: ['./pokemon-section-info.component.scss']
})
export class PokemonSectionInfoComponent {

  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() isLoading: boolean = false;

}

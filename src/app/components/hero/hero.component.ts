import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformationComponent } from './information/information.component';
import { SplashArtComponent } from './splash-art/splash-art.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, InformationComponent, SplashArtComponent],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

}

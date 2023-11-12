import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';

export const routes: Routes = [
    {
        path: "",
        component: HeroComponent
    },
    {
        path: "pokedex",
        component: PokedexComponent
    }
];

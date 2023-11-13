import { Routes } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { GameComponent } from './components/game/game.component';

export const routes: Routes = [
    {
        path: "",
        component: HeroComponent
    },
    {
        path: "game",
        component: GameComponent
    },
    {
        path: "pokedex",
        component: PokedexComponent
    }
];

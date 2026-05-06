import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PokemonList } from './pokemon-list/pokemon-list';
import { KantoDisplay } from './kanto-display/kanto-display';
import { JohtoDisplay } from './johto-display/johto-display';
import { HoennDisplay } from './hoenn-display/hoenn-display';
import { PokemartDisplay } from './pokemart-display/pokemart-display';
import { Cart } from './cart/cart';

export const routes: Routes = [
    //Home
    {path: 'home', component: Home},
    //redirect
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    //PokemonList
    {path: 'pokemonlist', component: PokemonList},
    //KantoDisplayComponent
    {path: 'kanto', component: KantoDisplay},
    //JohtoDisplayComponent
    {path: 'johto', component: JohtoDisplay},
    //HoennDisplayComponent
    {path: 'hoenn', component: HoennDisplay},
    //pokemartdisplay
    {path: 'pokemart', component: PokemartDisplay},
    // cart
    {path: 'cart', component: Cart}

   
];

import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { CommonModule } from '@angular/common';
import { PokemonList } from './pokemon-list/pokemon-list';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { PokemartDisplay } from './pokemart-display/pokemart-display';
import { Cart } from './cart/cart';


@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, PokemonList, NgxPaginationModule, RouterOutlet, Navbar, PokemartDisplay, Cart],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Final-Project');
}

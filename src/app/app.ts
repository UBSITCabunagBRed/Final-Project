import { Component, signal } from '@angular/core';
import { Header } from './header/header';
import { CommonModule } from '@angular/common';
import { PokemonList } from './pokemon-list/pokemon-list';
import { NgxPaginationModule } from 'ngx-pagination';


@Component({
  selector: 'app-root',
  imports: [Header, CommonModule, PokemonList, NgxPaginationModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Final-Project');
}

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Data } from '../services/data';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList implements OnInit {
  pokemons: any[] = []
  totalPokemons: number = 0;
  page: number = 1;

  constructor(
    private dataService: Data,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons(){
    this.pokemons = [];
    const offset = (this.page - 1) * 10;

    this.dataService.getPokemon(10, offset).subscribe((response: any) => {
      this.totalPokemons = response.count;
      response.results.forEach((result: any) => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
          this.cdr.detectChanges();
        })
      })
    })
  }
}
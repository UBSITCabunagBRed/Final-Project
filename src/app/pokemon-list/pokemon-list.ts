import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Data } from '../services/data';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [CommonModule, NgxPaginationModule, FormsModule],
  templateUrl: './pokemon-list.html',
  styleUrl: './pokemon-list.css',
})
export class PokemonList implements OnInit {
  allPokemons: any[] = [];
  filteredPokemons: any[] = [];
  totalPokemons: number = 0;
  page: number = 1;
  searchQuery: string = '';
  isLoading: boolean = true;

  constructor(
    private dataService: Data,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.fetchAllPokemons();
  }

  fetchAllPokemons() {
    this.isLoading = true;

    // fetch all pokemon names first (limit 1000 to cover all)
    this.dataService.getPokemon(400, 0).subscribe((response: any) => {
      this.totalPokemons = response.count;
      const results = response.results;
      let loaded = 0;

      results.forEach((result: any) => {
        this.dataService.getMoreData(result.name).subscribe((uniqResponse: any) => {
          this.allPokemons.push(uniqResponse);
          loaded++;

          if (loaded === results.length) {
            // sort by id so the list is in order
            this.allPokemons.sort((a, b) => a.id - b.id);
            this.filteredPokemons = [...this.allPokemons];
            this.totalPokemons = this.allPokemons.length;
            this.isLoading = false;
            this.cdr.detectChanges();
          }
        });
      });
    });
  }

  onSearch() {
    const query = this.searchQuery.toLowerCase().trim();
    this.page = 1; // reset to first page on search

    if (!query) {
      this.filteredPokemons = [...this.allPokemons];
    } else {
      this.filteredPokemons = this.allPokemons.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.types[0].type.name.toLowerCase().includes(query)
      );
    }

    this.totalPokemons = this.filteredPokemons.length;
    this.cdr.detectChanges();
  }
  onPageChange(newPage: number) {
    this.page = newPage;
    this.cdr.detectChanges();
}
}
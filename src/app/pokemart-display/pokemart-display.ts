import { Component, inject } from '@angular/core';
import { PokemartService } from '../services/pokemart';

@Component({
  selector: 'app-pokemart-display',
  imports: [],
  templateUrl: './pokemart-display.html',
  styleUrl: './pokemart-display.css',
})
export class PokemartDisplay {
  pokemartService = inject(PokemartService)
}

import { Component, inject } from '@angular/core';
import { Item, PokemartService } from '../services/pokemart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
   cartService = inject(PokemartService);

  get cart(): Item[] {
    return this.cartService.getCart(); // ✅ FIXED
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

}

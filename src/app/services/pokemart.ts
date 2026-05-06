import { Injectable, signal } from '@angular/core';

export interface Item {
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class PokemartService {

  private registry = signal([
    { name: 'Poke Ball', price: 200 },
    { name: 'Great Ball', price: 600 },
    { name: 'Ultra Ball', price: 1200 },
    { name: 'Potion', price: 300 },
    { name: 'Super Potion', price: 700 },
    { name: 'Hyper Potion', price: 1500 },
    { name: 'Revive', price: 1500 },
    { name: 'Antidote', price: 100 },
    { name: 'Paralyze Heal', price: 200 },
    { name: 'Escape Rope', price: 550 }
  ]);

  cart: Item[] = [];

  addToCart(item: Item) {
    this.cart.push(item);
  }

  removeFromCart(item: Item) {
    this.cart = this.cart.filter(i => i.name !== item.name);
  }

  getCart() {
    return this.cart;
  }

  getTotal() {
    return this.cart.reduce((sum, item) => sum + item.price, 0);
  }

  pokemart = this.registry.asReadonly();
}
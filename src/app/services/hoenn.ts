import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoennService {

  private registry = signal([
    {name: "Sceptile",
      type: ['Grass'],
      item: "White Herb",
      description: "In the jungle, its power is without equal. This POKéMON carefully grows trees and plants. It regulates its body temperature by basking in sunlight."
    },

    {name: "Blaziken",
      type: ['Fire', 'Fighting'],
      item: "Razor Claw",
      description: "It learns martial arts that use punches and kicks. Every several years, its old feathers burn off, and new, supple feathers grow back in their place."
    },

    {name: "Swampert",
      type: ['Water', 'Ground'],
      item: "Rocky Helmet",
      description: "If it senses the approach of a storm and a tidal wave, it protects its seaside nest by piling up boulders. It swims as fast as a jet ski."
    },

    {name: "Wailord",
      type: ['Water'],
      item: "Leftovers",
      description: "It breathes through nostrils that it raises above the sea. By inhaling to its maximum capacity, a WAILORD can dive close to 10,000 feet beneath the waves."
    },

    {name: "Ninetales",
      type: ['Fire'],
      item: "Wise Glasses",
      description: "It has long been said that each of the nine tails embody an enchanted power. A long-lived NINETALES will have fur that shines like gold."
    },

    {name: "Rayzquaza",
      type: ['Dragon','Flying'],
      item: "Life Orb",
      description: "A POKéMON that flies endlessly in the ozone layer. It is said it would descend to the ground if KYOGRE and GROUDON were to fight."
    },

  ])

  hoenn = this.registry.asReadonly();
}
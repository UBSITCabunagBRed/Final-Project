import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JohtoService {

 private registry = signal([
    {name: "Meganium",
      type: ['Grass'],
      item: "None",
      description: "Meganium is a Grass type Pokémon introduced in Generation 2."
    },

    {name: "Pidgeot",
      type: ['Normal','Flying'],
      item: "Pidgeotite",
      description: "Pidgeot has a Mega Evolution, available in Omega Ruby/Alpha Sapphire and Pokémon Go."
    },

    {name: "Beedrill",
      type: ['Bug', 'Poison'],
      item: "Poison Barb",
      description: "Beedrill has a Mega Evolution, available in Omega Ruby/Alpha Sapphire and Pokémon Go."
    },

    {name: "Geodude",
      type: ['Rock','Ground'],
      item: "Everstone",
      description: "Geodude has an Alolan Form, introduced in Pokémon Sun/Moon."
    },

    {name: "Golem",
      type: ['Rock','Ground'],
      item: "Custap Berry",
      description: "Golem has an Alolan Form, introduced in Pokémon Sun/Moon."
    },

    {name: "Jigglypuff",
      type: ['Normal', 'Fairy'],
      item: "None",
      description: "In Generation 9, a Paradox Pokémon Scream Tail was discovered, which bears a striking resemblance to Jigglypuff."
    },

  ])

  johto = this.registry.asReadonly();
}
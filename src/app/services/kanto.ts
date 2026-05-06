import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KantoService {

  private registry = signal([
    {name: "Bulbasur",
      type: ['Grass','Poison'],
      item: "None",
      description: "Bulbasaur is a small, mainly turquoise amphibian Pokémon with red eyes and a green bulb on its back. It is based on a frog/toad, with the bulb resembling a plant bulb that grows into a flower as it evolves."
    },

    {name: "Charizard",
      type: ['Fire','Flying'],
      item: "Curse Bangle ",
      description: "Charizard is a large dragon-like Pokémon, mainly orange in color. It has two large wings, the underside of which are turquoise. Like Charmander and Charmeleon, it has a flame at the end of its tail."
    },

    {name: "Blastoise",
      type: ['Water'],
      item: "Focus Band",
      description: "Blastoise is a large, bipedal, reptilian Pokémon. It has a blue body with small purple eyes, a light brown belly, and a stubby tail. It has a large brown shell with two powerful water cannons on either side, which can be withdrawn."
    },

    {name: "Butterfree",
      type: ['Bug','Flying'],
      item: "Focus Sash",
      description: "Butterfree is a Bug/Flying type Pokémon introduced in Generation 1."
    },

    {name: "Weedle",
      type: ['Bug','Poison'],
      item: "None",
      description: "Weedle is a Bug/Poison type Pokémon introduced in Generation 1."
    },

    {name: "Diglett",
      type: ['Ground'],
      item: "None",
      description: "Diglett has an Alolan Form, introduced in Pokémon Sun/Moon. In Scarlet/Violet a similar-looking Pokémon Wiglett was discovered, however it is a separate species to Diglett."
    },

  ])

  kanto = this.registry.asReadonly();
}
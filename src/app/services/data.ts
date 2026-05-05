import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Data {
  
  private http = inject(HttpClient)

  getPokemon(limit: number, offset: number){
      return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
} 
getMoreData(name:string){
   return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
}
}

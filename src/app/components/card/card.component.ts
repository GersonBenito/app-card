import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';
import { PokemonDetail } from 'src/interfaces/pokemos.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  public pokemons: PokemonDetail[] = [];

  constructor( private _pokemonService: PokemonService ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this._pokemonService.getPokemons().subscribe({
      next: response =>{
        response.results.forEach(pokemon =>{
          this.getDatailsPokemon(pokemon.url)
        });
      }
    });
  }

  getDatailsPokemon(url: string): void{
    this._pokemonService.getDatailsPokemon(url).subscribe({
      next: response =>{
        this.pokemons = response;
      }
    });
  }
}

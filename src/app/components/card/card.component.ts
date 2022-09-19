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
  public section: 'stats' | 'evolution' = 'stats';
  public id: number | undefined = undefined;
  // public showEvolution: boolean = true;

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
        console.log(this.pokemons);
      }
    });
  }

  toggleSection(section: 'stats' | 'evolution', id: number): void{
    this.section = section;
    this.id = id;
    // this.showEvolution = section === 'stats'  ? true : false;
    console.log('id -->', this.id); 
  }

}

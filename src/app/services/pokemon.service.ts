import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { Response } from 'src/interfaces/response.interface';
import { PokemonDetail } from 'src/interfaces/pokemos.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly URL: string = env.urlBase;
  private pokemons: PokemonDetail[] = [];

  constructor( private httpClient: HttpClient ) { }

  getPokemons(): Observable<Response>{
    return this.httpClient.get<Response>(`${this.URL}/pokemon`);
  }
  
  getDatailsPokemon(url: string): Observable<any>{
    return this.httpClient.get<any>(url)
                          .pipe(
                            map( response =>{
                              return { 
                                id: response.id,
                                name: response.name,
                                sprites: response.sprites.other.dream_world.front_default,
                                species: response.species.name,
                                base_experience: response.base_experience,
                                height: response.height,
                                weight: response.weight,
                                evolutions: [
                                  {
                                    name: response.name,
                                    sprite: response.sprites.other.home.front_default,
                                    form: 'first form',
                                  },
                                  {
                                    name: response.name,
                                    sprite: response.sprites.other.home.front_shiny,
                                    form: 'second form'
                                  },
                                  {
                                    name: response.name,
                                    sprite: response.sprites.other["official-artwork"].front_default,
                                    form: 'third form'
                                  },
                                ],
                                types: [
                                  response.types[0]?.type.name || '',
                                  response.types[1]?.type.name || '',
                                ],
                                abilities: [ 
                                  response.abilities[0]?.ability.name || '',  
                                  response.abilities[1]?.ability.name || '', 
                                ],
                                stats: [
                                  {
                                    name: response.stats[0]?.stat?.name || '',
                                    base_stat: response.stats[0]?.base_stat || 0,
                                  },
                                  {
                                    name: response.stats[1]?.stat?.name || '',
                                    base_stat: response.stats[1]?.base_stat || 0,
                                  },
                                  {
                                    name: response.stats[2]?.stat?.name || '',
                                    base_stat: response.stats[2]?.base_stat || 0,
                                  },
                                  {
                                    name: response.stats[3]?.stat?.name || '',
                                    base_stat: response.stats[3]?.base_stat || 0,
                                  },
                                  {
                                    name: response.stats[4]?.stat?.name || '',
                                    base_stat: response.stats[4]?.base_stat || 0,
                                  },
                                ],
                              }
                            }
                          ),
                          map( response =>{
                            this.pokemons.push(response);
                            return this.pokemons.sort((a, b) => a.id - b.id);
                          })
                        )
  }
}


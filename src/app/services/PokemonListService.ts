import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Pokemon } from '../models/Pokemon';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PokemonListService{

    constructor(private http:Http){
        
    }

    getPokemones():Observable <Pokemon []>{
        return this.http.get('https://pokeapi.co/api/v2/generation/1/').map((response:Response) => response.json());
        //      <tr *ngFor="let pokemon of pokemones | async">                
    }
}
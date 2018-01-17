import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { PokemonListService } from '../services/PokemonListService';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-listado-pokemon',
  templateUrl: './listado-pokemon.component.html',
  styleUrls: ['./listado-pokemon.component.css'],
  providers : [PokemonListService]
})
export class ListadoPokemonComponent implements OnInit {

pokemones : Observable <Pokemon[]>
constructor(private pokemonListService:PokemonListService) { }
  
  ngOnInit() {

    this.pokemones = this.pokemonListService.getPokemones(); 
    console.log(this.pokemones);
   // console.log("Hola");
  }

}

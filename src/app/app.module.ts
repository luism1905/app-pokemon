import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ListadoPokemonComponent } from './listado-pokemon/listado-pokemon.component';
import { ItemPokemonComponent } from './item-pokemon/item-pokemon.component';
import { DetallePokemonComponent } from './detalle-pokemon/detalle-pokemon.component';

import { PokemonListService } from './services/PokemonListService';


@NgModule({
  declarations: [
    AppComponent,
    ListadoPokemonComponent,
    ItemPokemonComponent,
    DetallePokemonComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path:'detalle',
        component:DetallePokemonComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

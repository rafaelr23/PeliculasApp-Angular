import { Component } from '@angular/core';
import { PeliculasService } from './services/peliculas.service';
import { Cartelera } from './interface/cartelera-responsive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   
  constructor ( private peliculasServices: PeliculasService){
    
  }
}

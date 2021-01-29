import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interface/cartelera-responsive';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public titulo:string;
  public movies:Movie[];

  constructor( private activatedRouter: ActivatedRoute,
               private peliculasServices: PeliculasService) { }

  ngOnInit(): void {

    this.activatedRouter.params.subscribe( params =>{

      this.titulo = params.id;
      console.log(params);
      //Llamar el servicio
      this.peliculasServices.buscarPeliculas(params.id).subscribe( movies =>{
        this.movies = movies;
      })
    });
  }

}

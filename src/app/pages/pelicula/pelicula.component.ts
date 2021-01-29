import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { MovieDetalle } from '../../interface/movie-responsive';
import { Location } from '@angular/common';
import { MovieCredit, Cast } from '../../interface/movie-credits';
import { combineLatest, CombineLatestOperator } from 'rxjs/internal/observable/combineLatest';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {


  public pelicula:MovieDetalle;
  public cast:Cast[] = [];

  constructor( private activatedRouter: ActivatedRoute,
               private peliculasServices:PeliculasService,
               private location: Location, private router:Router) { }

  ngOnInit(): void {

   const { id } = this.activatedRouter.snapshot.params;

   combineLatest([
    this.peliculasServices.getPeliculaDetalle(id),
    this.peliculasServices.getPeliculaCredits(id)
   ]).subscribe( ([pelicula,cast]) =>{
     console.log(pelicula,cast);
     
      if(!pelicula){
        this.router.navigateByUrl('/home');
        return
      }
      
      this.pelicula = pelicula;
      this.cast = cast.filter( actor => actor.profile_path !== null);
   });

  //  this.peliculasServices.getPeliculaDetalle(id).subscribe( detalles =>{
      
  //     if(!detalles){
  //       this.router.navigateByUrl('/home');
  //       return
  //     }

  //     this.pelicula = detalles;
  //  });

  //  this.peliculasServices.getPeliculaCredits(id).subscribe( (cast) => {
  //    console.log(cast)
  //   this.cast = cast.filter( actor => actor.profile_path !== null);
  //  })
  }

  regresar(){
    this.location.back();
  }
}

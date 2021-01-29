import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Cartelera, Movie } from '../../interface/cartelera-responsive';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  constructor( private peliculasServices:PeliculasService) { }
  public movies:Movie[] = [];
  public moviesSlideShow:Movie[] = [];

  @HostListener('window:scroll',['$event'])

  onScroll(){
    const pos =( document.documentElement.scrollTop || document.body.scrollTop) + 1200;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if(pos > max){
      //Llamar el servicio

      if( this.peliculasServices.cargando){
          return
      }
      this.peliculasServices.getCartelera().subscribe( movie =>{
        this.movies.push(...movie)
        
      })
    }

  }

  ngOnInit(): void {

    this.peliculasServices.getCartelera().subscribe( (movie) =>{
      //console.log(resp);
      this.movies = movie;
      this.moviesSlideShow = movie;
    })
  }

  ngOnDestroy():void{
    this.peliculasServices.resetCartelera();
  }

}

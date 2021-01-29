import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable, observable, of } from 'rxjs';
import { Cartelera, Movie } from '../interface/cartelera-responsive';
import { tap,map, catchError } from 'rxjs/operators';
import { MovieDetalle } from '../interface/movie-responsive';
import { Cast, MovieCredit } from '../interface/movie-credits';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private baseUrl:string = 'https://api.themoviedb.org/3';
  private carteleraPage = 1;
  public cargando: boolean = false;

  //--------------------------------------------------------//
  //---------------Constructor-----------------------------//
  //------------------------------------------------------//
  constructor(
              private http: HttpClient
  ) { 

   
  }


   //--------------------------------------------------------//
  //---------------Get cartelera-----------------------------//
  //------------------------------------------------------//
  get params(){
    return{
      api_key:'fe30ab55f33779c78c7810f587a61f0c',
      language:'es-ES',
      page: this.carteleraPage.toString()
    }
    }

  getCartelera():Observable<Movie[]>{
    if(this.cargando){  
      return of([]);

    }

    this.cargando = true;

    return this.http.get<Cartelera>(`${this.baseUrl}/movie/now_playing`,{
      params:this.params
    }).pipe(
      map( (resp) => resp.results),
      tap( () => {
        this.carteleraPage += 1
        this.cargando= false;
      })
    );
  }


   //--------------------------------------------------------//
  //---------------Buscar Peliculas-----------------------------//
  //------------------------------------------------------//
  buscarPeliculas( texto: string):Observable<Movie[]>{
    
    const params = {...this.params,page: '1',query:texto};

    //https://api.themoviedb.org/3/search/movie?api_key=fe30ab55f33779c78c7810f587a61f0c&language=es-ES&page=1&include_adult=false
    return this.http.get<Cartelera>(`${this.baseUrl}/search/movie`,{
       params
     }).pipe(
       map( res => res.results)
     )
  }

   //--------------------------------------------------------//
  //---------------Resetear Cartelera-----------------------------//
  //------------------------------------------------------//
  resetCartelera(){
  this.carteleraPage = 1;
  }

  //------------------------------------------------------------------------//
  //---------------Buscar detalles de Pelicula-----------------------------//
  //----------------------------------------------------------------------//
  getPeliculaDetalle(id:String){
    //https://api.themoviedb.org/3/movie/508442?api_key=fe30ab55f33779c78c7810f587a61f0c&language=es-ES
    return this.http.get<MovieDetalle>(`${this.baseUrl}/movie/${id}`,{
      params: this.params
    }).pipe(
      catchError( err =>of(null))
    );
  }


  //------------------------------------------------------------------------//
  //---------------Creditos de la Pelicula-----------------------------//
  //----------------------------------------------------------------------//
  getPeliculaCredits(id:String):Observable<Cast[]>{
    //https://api.themoviedb.org/3/movie/508442?api_key=fe30ab55f33779c78c7810f587a61f0c&language=es-ES
    return this.http.get<MovieCredit[]>(`${this.baseUrl}/movie/${id}/credits`,{
      params: this.params
    }).pipe(
      map( (resp) => {
        console.log(resp)
        return resp.cast
      }),catchError(
         err =>of([])
         )
    );
  }
}

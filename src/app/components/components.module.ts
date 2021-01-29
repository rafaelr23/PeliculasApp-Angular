//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { PipiesModule } from '../pipies/pipies.module';

//Components
import { NavbarComponent } from './navbar/navbar.component';
import { SlideShowComponent } from './slide-show/slide-show.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { CastSlidShowComponent } from './cast-slid-show/cast-slid-show.component';




@NgModule({
  declarations: [
     NavbarComponent,
     SlideShowComponent,
     PeliculasPosterGridComponent,
     CastSlidShowComponent],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipiesModule
  ],
  exports:[
    NavbarComponent,
    SlideShowComponent,
    PeliculasPosterGridComponent,
    CastSlidShowComponent
  ]
})
export class ComponentsModule { }

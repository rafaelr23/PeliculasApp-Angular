//Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { RatingModule } from 'ng-starrating';

//Components
import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PipiesModule } from '../pipies/pipies.module';

@NgModule({
  declarations: [HomeComponent, PeliculaComponent, BuscarComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    PipiesModule,
    RatingModule
  ]
})
export class PagesModule { }

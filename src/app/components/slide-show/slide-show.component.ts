import { Component, OnInit,Input, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { Movie } from '../../interface/cartelera-responsive';


@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, AfterViewInit {
  
  @Input() movies:Movie[];
  public mySwiper:Swiper;
  constructor() { 
    
  }
 ngAfterViewInit():void{
  this.mySwiper = new Swiper('.swiper-container',{
    loop:true
  });
  
 }
  ngOnInit(): void {
    console.log(this.movies);
  }

  Siguiente(){
    this.mySwiper.slideNext();
  }
  Retroceder(){

    this.mySwiper.slidePrev();
  }
}

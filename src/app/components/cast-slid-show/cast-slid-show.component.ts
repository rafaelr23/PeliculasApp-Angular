import { Component, Input, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { MovieCredit, Cast } from '../../interface/movie-credits';

@Component({
  selector: 'app-cast-slid-show',
  templateUrl: './cast-slid-show.component.html',
  styleUrls: ['./cast-slid-show.component.css']
})
export class CastSlidShowComponent implements OnInit,AfterViewInit {

  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cast)
    
  }
ngAfterViewInit(){
  const swiper = new Swiper('.swiper-container',{
    slidesPerView:5.3,
    freeMode:true,
    spaceBetween:15
  });
}
}

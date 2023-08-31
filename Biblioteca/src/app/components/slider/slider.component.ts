import { Component } from '@angular/core';
// import Swiper from 'swiper';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
  items = [
    {
      imagen: '../../../assets/img/img_1.jpg',
      nombre: 'name one',
      autor: 'author one',
    },
    {
      imagen: '../../../assets/img/img_2.jpg',
      nombre: 'name two',
      autor: 'athor two',
    },
    {
      imagen: '../../../assets/img/img_2.jpg',
      nombre: 'name two',
      autor: 'athor two',
    },
    {
      imagen: '../../../assets/img/img_2.jpg',
      nombre: 'name two',
      autor: 'athor two',
    },
    {
      imagen: '../../../assets/img/img_2.jpg',
      nombre: 'name two',
      autor: 'athor two',
    }
  ];

  
  // ngOnInit(): void {
  //   // Inicialización de Swiper
  //   const mySwiper = new Swiper('.swiper-container', {
  //     // Opciones de Swiper
  //     // pagination: {
  //     //   clickable: true,
  //     // },
  //     slidesPerView: 2,
  //     // ... otras opciones
  //   });
  // }
  
}

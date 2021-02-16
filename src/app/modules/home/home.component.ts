import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  // slides = [{image: 'https://gsr.dev/material2-carousel/assets/demo.png'}, {image: 'https://gsr.dev/material2-carousel/assets/demo.png'},
  //    {image: 'https://gsr.dev/material2-carousel/assets/demo.png'}];

  slides = [{image: 'assets/images/carrosel/1.jpg'}, {image: 'assets/images/carrosel/2.jpg'},
    {image: 'assets/images/carrosel/3.jpg'}];

  profissionais = [{image: 'assets/images/profissionais/c1.png'}, {image: 'assets/images/profissionais/c2.jpg'},
    {image: 'assets/images/profissionais/c3.jpg'}];

  produtos = [
    {image: 'assets/images/produtos/p1.jpg'},
    {image: 'assets/images/produtos/p2.jpg'},
    {image: 'assets/images/produtos/p3.jpg'},
    {image: 'assets/images/produtos/p4.jpg'},
    {image: 'assets/images/produtos/p5.jpg'},
    {image: 'assets/images/produtos/p6.jpg'},
    {image: 'assets/images/produtos/p7.jpg'},
    {image: 'assets/images/produtos/p8.jpg'},
    {image: 'assets/images/produtos/p9.jpg'}];

  ngOnInit(): void {
  }

}

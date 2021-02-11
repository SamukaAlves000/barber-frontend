import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  slides = [{image: 'https://gsr.dev/material2-carousel/assets/demo.png'}, {image: 'https://gsr.dev/material2-carousel/assets/demo.png'},
     {image: 'https://gsr.dev/material2-carousel/assets/demo.png'}];

  // slides = [{image: 'assets/images/corrosel/1.jpg'}, {image: 'assets/images/corrosel/2.jpg'},
  //   {image: 'assets/images/corrosel/3.jpg'}, {image: 'assets/images/corrosel/4.jpg'}, {image: 'assets/images/corrosel/5.jpg'}];

  ngOnInit(): void {
  }

}

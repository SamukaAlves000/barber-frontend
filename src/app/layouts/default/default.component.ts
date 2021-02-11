import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen = false;
   isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  constructor() { }

  ngOnInit(): void {
    if (this.isMobile) {
      console.log('MOBILE');
    }
    else {
      console.log('DESKTOP');
    }
  }

  sideBarToggler($event: any): void {
    this.sideBarOpen = !this.sideBarOpen;
  }
}

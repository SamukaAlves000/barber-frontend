import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  ngOnInit(): void {
  }

  toggleSideBar(): void {
    if (this.isMobile) {
      this.toggleSideBarForMe.emit();
      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
    }
  }
}

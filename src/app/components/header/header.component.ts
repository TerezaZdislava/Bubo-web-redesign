import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobileMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
    console.log('showMobileMenu ' + this.mobileMenu)
  }
}

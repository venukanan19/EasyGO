import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
  appName = 'EasyGO';
  currentYear = new Date().getFullYear(); 
  @Input() cartCount: number = 0;
}

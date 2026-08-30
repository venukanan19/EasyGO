import { Component } from '@angular/core';
import { Navbar } from './navbar/navbar';
import { NavigationEnd, NavigationStart, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(private router: Router) {
  this.router.events.subscribe(event => {

    if (event instanceof NavigationStart) {
      console.log('Navigation started:', event.url);
    }

    if (event instanceof NavigationEnd) {
      console.log('Navigation ended:', event.urlAfterRedirects);
    }

  });
}

}
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { logIn } from '../../guards/auth-guard';

@Component({
  imports: [],
  selector: 'app-login',
  styleUrl: './login.css',
  templateUrl: './login.html',
})
export class Login {
  constructor(private router: Router) {}

onLogin() {
  logIn();
  this.router.navigate(['/cart']);
}
}

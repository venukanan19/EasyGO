import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

let isLoggedIn = false;

export function logIn() {
  isLoggedIn = true;
}

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);

  if (isLoggedIn) {
    return true;
  }

  return router.createUrlTree(['/login']);
};
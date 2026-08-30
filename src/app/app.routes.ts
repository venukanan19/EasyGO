import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: Home },

  {
    path: 'products',
    loadComponent: () =>
      import('./pages/products/products')
        .then(m => m.Products),

    children: [
      {
        path: '',
        loadComponent: () =>
          import('./product-list/product-list')
            .then(m => m.ProductList)
      },
      {
        path: ':id',
        loadComponent: () =>
          import('./pages/product-details/product-details')
            .then(m => m.ProductDetails)
      }
    ]
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login')
        .then(m => m.Login)
  },

  {
    path: 'cart',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/cart/cart')
        .then(m => m.Cart)
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about')
        .then(m => m.About)
  },

  {
    path: '**',
    loadComponent: () =>
      import('./pages/not-found/not-found')
        .then(m => m.NotFound)
  }

];
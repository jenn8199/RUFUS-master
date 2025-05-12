import { Routes } from '@angular/router';

export const routes: Routes = [
  // Redirección por defecto a /login
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Ruta del login
  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent)
  },

  // Ruta de películas
  {
    path: 'peliculas',
    loadComponent: () =>
      import('./components/peliculas/peliculas.component').then(m => m.PeliculasComponent)
  },

  // Ruta del detalle de película
  {
    path: 'pelicula/:id',
    loadComponent: () =>
      import('./components/pelicula-detalle/pelicula-detalle.component').then(m => m.PeliculaDetalleComponent)
  },

  // Ruta de recuperación
  {
    path: 'recuperar',
    loadComponent: () => 
      import('./components/recuperar/recuperar.component').then(m => m.RecuperarComponent)
  },

  // Ruta para Home
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  },

  // Ruta para About
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then(m => m.AboutComponent)
  },

  // Ruta para cualquier página no encontrada
  { path: '**', redirectTo: 'login' }
];

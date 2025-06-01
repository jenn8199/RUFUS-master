import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard'; // Asegúrate de ajustar la ruta si el archivo está en otra carpeta

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'login',
    loadComponent: () =>
      import('./components/login/login.component').then(m => m.LoginComponent)
  },

  {
    path: 'peliculas',
    canActivate: [AuthGuard], // 🔒 protegida
    loadComponent: () =>
      import('./components/peliculas/peliculas.component').then(m => m.PeliculasComponent)
  },

 {
  path: 'pelicula/:id',
  loadComponent: () =>
    import('./components/pelicula-detalle/pelicula-detalle.component').then(
      (m) => m.PeliculaDetalleComponent
    )
},

  {
    path: 'recuperar',
    loadComponent: () =>
      import('./components/recuperar/recuperar.component').then(m => m.RecuperarComponent)
  },

  {
    path: 'home',
    canActivate: [AuthGuard], // 🔒 opcional
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then(m => m.AboutComponent)
  },

  { path: '**', redirectTo: 'login' }
];

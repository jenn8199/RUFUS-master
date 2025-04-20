import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { LoginComponent } from './components/login/login.component';
import { PeliculaDetalleComponent } from './components/pelicula-detalle/pelicula-detalle.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Página inicial
  { path: 'login', component: LoginComponent },
  { path: 'peliculas', component: PeliculasComponent },
  { path: 'detalle/:id', component: PeliculaDetalleComponent }, // detalle con parámetro
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

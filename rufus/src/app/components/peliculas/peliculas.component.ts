import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { PeliculasService, Pelicula } from '../../services/peliculas.service';


@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService, private router: Router) {}

ngOnInit(): void {
  this.peliculasService.getPeliculas().subscribe({
    next: (data: Pelicula[]) => {
      this.peliculas = data;
    },
    error: (error) => {
      console.error('Error al cargar películas', error);
      // Podrías mostrar un mensaje de error en el HTML si quieres
    }
  });
}
  // Método para navegar a los detalles de una película
  verDetalles(pelicula: Pelicula): void {
    // Aquí podrías implementar la lógica para navegar a la página de detalles
     this.router.navigate(['/pelicula', pelicula.id]);
  }
}

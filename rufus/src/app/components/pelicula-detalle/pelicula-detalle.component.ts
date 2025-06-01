import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService, Pelicula } from '../../services/peliculas.service';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common'; // Necesario para usar *ngIf

@Component({
  selector: 'app-pelicula-detalle',
  standalone: true, // Componente standalone
  imports: [HeaderComponent, CommonModule], // Importamos módulos necesarios
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {
  pelicula: Pelicula | null = null; // Variable que almacenará la película

  constructor(
    private route: ActivatedRoute, // Para obtener el parámetro "id" de la ruta
    private peliculasService: PeliculasService // Servicio para obtener la película
  ) {}

  ngOnInit(): void {
  const idParam = this.route.snapshot.paramMap.get('id');
  const id = idParam ? Number(idParam) : NaN;

  if (isNaN(id)) {
    console.error('ID de película inválido');
    return; // o mostrar un mensaje de error / redireccionar
  }

  this.peliculasService.getPelicula(id).subscribe({
  next: data => this.pelicula = data,
  error: err => {
    console.error('Error al cargar la película', err);
    // Opcional: mostrar mensaje de error o navegar a otra página
  }
});
}
}

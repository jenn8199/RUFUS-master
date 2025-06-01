import { Component, OnInit } from '@angular/core';
// ActivatedRoute nos permite acceder a parámetros de la URL, como el id de la película
import { ActivatedRoute } from '@angular/router';
// Importamos el servicio que obtiene las películas y la interfaz Pelicula
import { PeliculasService, Pelicula } from '../../services/peliculas.service';
// Importamos el componente header para usarlo dentro de este componente standalone
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-pelicula-detalle',
  standalone: true,             // Este componente es standalone (sin módulo)
  imports: [HeaderComponent],   // Aquí indicamos que usaremos el HeaderComponent dentro de este componente
  templateUrl: './pelicula-detalle.component.html',  // Archivo HTML para la vista
  styleUrls: ['./pelicula-detalle.component.css']    // Archivo CSS con estilos para este componente
})
export class PeliculaDetalleComponent implements OnInit {
  // Variable para almacenar la película que se mostrará en el detalle
  pelicula: Pelicula | null = null;

  // Inyectamos ActivatedRoute para leer parámetros y el servicio para obtener datos de películas
  constructor(
    private route: ActivatedRoute,
    private peliculasService: PeliculasService
  ) {}

  // Este método se ejecuta al iniciar el componente
  ngOnInit(): void {
    // Obtenemos el id de la película desde la URL (como string), lo convertimos a número
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Llamamos al servicio para obtener la película por id
    this.peliculasService.getPelicula(id).subscribe(data => {
      // Guardamos la película obtenida para mostrarla en el template
      this.pelicula = data;
    });
  }
}

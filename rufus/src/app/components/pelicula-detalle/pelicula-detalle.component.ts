import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component'; // Asegúrate de importar correctamente

@Component({
  selector: 'app-pelicula-detalle',
  standalone: true,
  imports: [HeaderComponent], 
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent {}

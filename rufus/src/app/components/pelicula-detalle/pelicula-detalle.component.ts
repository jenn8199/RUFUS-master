import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-pelicula-detalle',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './pelicula-detalle.component.html',
  styleUrl: './pelicula-detalle.component.css'
})
export class PeliculaDetalleComponent {}

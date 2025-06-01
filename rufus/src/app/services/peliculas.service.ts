import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

// Interfaz para tipar una película
export interface Pelicula {
  id: number;
  titulo: string;
  genero: string;
  anio: number;
  imagen: string;
  descripcion: string;
  trailerUrl: string;
}

// Decorador que indica que es un servicio disponible globalmente
@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  // URL del backend (.NET) para consumir películas
  private apiUrl = '/api/peliculas';


  constructor(private http: HttpClient) {}

  // Método para obtener todas las películas
  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  // Método para obtener una película por ID
  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.apiUrl}/${id}`);
  }
}

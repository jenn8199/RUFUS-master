import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Pelicula {
  id: number;
  titulo: string;
  genero: string;
  anio: number;
  imagen: string;
  descripcion: string;
  trailerUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'http://localhost:5108/api/peliculas'; // URL backend

  constructor(private http: HttpClient) {}

  // Obtener todas las películas
  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  // Obtener una película por id
  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.apiUrl}/${id}`);
  }
}

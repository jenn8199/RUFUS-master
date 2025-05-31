import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Pelicula {
  id: number;
  titulo: string;
  genero: string;
  anio: number;
  imagen: string;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private apiUrl = 'http://localhost:5108/api/peliculas'; // Ajusta el puerto si es otro

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${this.apiUrl}/${id}`);
  }
}

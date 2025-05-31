import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apiUrl = 'https://localhost:5001/api/peliculas';

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getPeliculaById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}

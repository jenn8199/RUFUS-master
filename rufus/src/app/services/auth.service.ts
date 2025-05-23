import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private emailKey = 'userEmail';
  private passwordKey = 'userPassword';
  private apiUrl = 'http://localhost:5000/api/'; 

  constructor(private http: HttpClient) {}

  
  login(datos: { correo: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl + 'login', datos, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Puedes actualizar este endpoint si también lo migras a .NET
  recuperarPassword(email: string): Observable<any> {
    return this.http.post(this.apiUrl + 'recuperar', { email }, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  guardarDatos(email: string, password: string, persistente: boolean = true): void {
    const storage = persistente ? localStorage : sessionStorage;
    storage.setItem(this.emailKey, email);
    storage.setItem(this.passwordKey, password);
  }

  obtenerDatos(persistente: boolean = true): { email: string | null, password: string | null } {
    const storage = persistente ? localStorage : sessionStorage;
    return {
      email: storage.getItem(this.emailKey),
      password: storage.getItem(this.passwordKey)
    };
  }

  eliminarDatos(persistente: boolean = true): void {
    const storage = persistente ? localStorage : sessionStorage;
    storage.removeItem(this.emailKey);
    storage.removeItem(this.passwordKey);
  }
}

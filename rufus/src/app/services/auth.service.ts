import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private emailKey = 'userEmail';
  private passwordKey = 'userPassword';
  private apiUrl = 'http://localhost/Angular/backend-rufus/';

  constructor(private http: HttpClient) {}

  // Método para iniciar sesión conectándose a PHP
  login(datos: any): Observable<any> {
    return this.http.post(this.apiUrl + 'login.php', datos, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // Método para recuperación de contraseña
  recuperarPassword(email: string): Observable<any> {
    return this.http.post(this.apiUrl + 'recuperar.php', { email }, {
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // LocalStorage/sessionStorage
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

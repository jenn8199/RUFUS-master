import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  // ✅ Inyectamos HttpClient en el constructor
  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;

      this.http.post('http://localhost/rufus-master/backend-rufus/login.php', formData, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
        responseType: 'text' // para respuestas tipo texto (como "ok" o "error")
      }).subscribe(
        (response: string) => { //Tipado del parámetro
          console.log('Respuesta del servidor:', response);

          if (response.includes('ok')) {
            alert("Login exitoso");
            // this.router.navigate(['/dashboard']);
          } else {
            alert("Credenciales incorrectas");
          }
        },
        (error: any) => { //Tipado del parámetro
          console.error('Error en la petición:', error);
          alert("Error al conectarse con el servidor");
        }
      );
    }
  }

  goToRegister() {}
  goToForgotPassword() {}
  guardarDatos() {}
  verDatosGuardados() {}
  eliminarDatosGuardados() {}
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
  
      this.authService.login({ email, password }).subscribe({
        next: (res: any) => {
          if (res.success) {
            console.log('Inicio de sesión exitoso');
            this.router.navigate(['/peliculas']);
          } else {
            alert(res.message);
          }
        },
        error: (err) => {
          console.error('Error al conectar con el backend', err);
          alert('Error en el servidor');
        }
      });      
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  guardarDatos() {
    const { email, password } = this.loginForm.value;
    this.authService.guardarDatos(email, password, true); // true = localStorage
    alert('Datos guardados correctamente en localStorage');
  }

  verDatosGuardados() {
    const { email, password } = this.authService.obtenerDatos(true);
    alert(`Email: ${email}\nContraseña: ${password}`);
  }

  eliminarDatosGuardados() {
    this.authService.eliminarDatos(true);
    alert('Datos eliminados correctamente');
  }

  goToRegister() {
    this.router.navigate(['/registro']);
  }

  goToForgotPassword() {
    this.router.navigate(['/recuperar']);
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password(): AbstractControl | null {
    return this.loginForm?.get('password');
  }  
}

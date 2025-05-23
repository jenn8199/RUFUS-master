import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  mensaje = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;

    const datos = {
      correo: this.loginForm.value.email,
      password: this.loginForm.value.password
    };

    this.authService.login(datos).subscribe({
      next: (response: any) => {
        console.log(response);
        this.mensaje = 'Login exitoso';
        this.router.navigate(['/peliculas']);
      },
      error: (error: any) => {
        console.error(error);
        this.mensaje = 'Correo o contraseña incorrectos';
      }
    });
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }

  goToForgotPassword(): void {
    this.router.navigate(['/recuperar']);
  }

  guardarDatos(): void {
    const { email, password } = this.loginForm.value;
    this.authService.guardarDatos(email, password, true);
  }

  verDatosGuardados(): void {
    const datos = this.authService.obtenerDatos(true);
    alert(`Email: ${datos.email}, Password: ${datos.password}`);
  }

  eliminarDatosGuardados(): void {
    this.authService.eliminarDatos(true);
  }
}

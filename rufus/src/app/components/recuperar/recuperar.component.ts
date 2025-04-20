import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recuperar',
  standalone: true,
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class RecuperarComponent implements OnInit {

  form!: FormGroup; // Formulario reactivo
  mensaje: string = ''; // Texto del mensaje de respuesta
  tipoMensaje: 'success' | 'error' | '' = ''; // Tipo de mensaje para cambiar color en HTML

  constructor(
    private fb: FormBuilder,          // Para construir el formulario
    private authService: AuthService, // Servicio de autenticación
    private router: Router            // Para redireccionar
  ) {}

  ngOnInit(): void {
    // Inicializamos el formulario con validaciones
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  // Función que se ejecuta al enviar el formulario
  onSubmit(): void {
    if (this.form.valid) {
      const email = this.form.value.email;

      this.authService.recuperarPassword(email).subscribe({
        next: (res: any) => {
          // Mostramos el mensaje de respuesta
          this.mensaje = res.message;
          this.tipoMensaje = res.success ? 'success' : 'error';
          this.form.reset(); // Limpiamos el formulario
        },
        error: (err) => {
          console.error(err);
          this.mensaje = 'Ocurrió un error al intentar recuperar la contraseña.';
          this.tipoMensaje = 'error';
        }
      });
    } else {
      // Marcamos todos los campos como tocados para mostrar errores
      this.form.markAllAsTouched();
    }
  }

  // Función para volver al login
  volverAlLogin(): void {
    this.router.navigate(['/login']);
  }
}

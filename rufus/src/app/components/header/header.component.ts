import { Component } from '@angular/core';
// CommonModule incluye directivas comunes de Angular como ngIf, ngFor, etc.
import { CommonModule } from '@angular/common';
// RouterModule permite usar directivas para navegación, como routerLink
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',   // Nombre del componente para usar en templates (<app-header>)
  standalone: true,         // Componente standalone, no necesita módulo
  imports: [CommonModule, RouterModule],  // Importa módulos necesarios para el template
  templateUrl: './header.component.html', // Archivo HTML con la vista del header
  styleUrls: ['./header.component.css']   // Archivo CSS con estilos específicos del header
})
export class HeaderComponent {
  // Actualmente este componente no tiene lógica ni variables
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 Importa esto

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // 👈 Agrega esto aquí
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}

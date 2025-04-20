import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // 👈 ¡Esto faltaba!
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corregido: era "styleUrl", debe ser "styleUrls"
})
export class AppComponent {
  title = 'rufus';
}

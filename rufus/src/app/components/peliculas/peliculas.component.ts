import { Component, AfterViewInit } from '@angular/core';
import { RouterModule } from '@angular/router'; // 👈 IMPORTANTE
import { HeaderComponent } from '../header/header.component';

declare function initCustomScripts(): void;

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [RouterModule, HeaderComponent], // 👈 AGREGA RouterModule
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    setTimeout(() => {
      initCustomScripts();
    }, 0);
  }
}

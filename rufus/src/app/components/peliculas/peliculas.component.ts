import { Component, AfterViewInit } from '@angular/core';

declare function initCustomScripts(): void;

@Component({
  selector: 'app-peliculas',
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

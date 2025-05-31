import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { PeliculasService, Pelicula } from '../../services/peliculas.service';


@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {
  peliculas: Pelicula[] = [];

  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe(data => {
      this.peliculas = data;
    });
  }
}

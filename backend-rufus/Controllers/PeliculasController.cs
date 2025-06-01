using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace PeliculasAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PeliculasController : ControllerBase
    {
        // Lista simulada de películas
        private static List<Pelicula> peliculas = new List<Pelicula>
        {
            new Pelicula {
                Id = 1,
                Titulo = "Jeepers Creepers",
                Genero = "Terror",
                Anio = 2001,
                Imagen = "assets/img/terror1.jpg",
                Descripcion = "Trish y su hermano Derry presencian algo aterrador y son perseguidos por una criatura.",
                TrailerUrl = "https://youtu.be/hmKnm2jH_2Y?si=M8UmtavmgAYMJeAz"
            },
            new Pelicula {
                Id = 2,
                Titulo = "Scream",
                Genero = "Terror",
                Anio = 1996,
                Imagen = "assets/img/terror2.jpg",
                Descripcion = "Un asesino enmascarado acecha a los estudiantes de una secundaria.",
                TrailerUrl = "https://youtu.be/bejzd7VQ1i8"
            },
            new Pelicula {
                Id = 3,
                Titulo = "Cadáver",
                Genero = "Terror",
                Anio = 2018,
                Imagen = "assets/img/terror3.jpg",
                Descripcion = "Una oficial de policía descubre que algo demoníaco habita en un cadáver.",
                TrailerUrl = "https://youtu.be/9-3zZVx4GFY"
            },
            new Pelicula {
                Id = 4,
                Titulo = "Espíritus",
                Genero = "Terror",
                Anio = 2010,
                Imagen = "assets/img/terror4.jpg",
                Descripcion = "Un grupo de jóvenes se enfrenta a fuerzas sobrenaturales tras visitar una casa maldita.",
                TrailerUrl = "https://youtu.be/fake-trailer-url"
            },
            new Pelicula {
                Id = 5,
                Titulo = "La Noche del Demonio: La Puerta Roja",
                Genero = "Terror",
                Anio = 2023,
                Imagen = "assets/img/terror5.jpg",
                Descripcion = "Una familia intenta cerrar la puerta que conecta con un reino demoníaco.",
                TrailerUrl = "https://youtu.be/fake-trailer-url"
            },
            new Pelicula {
                Id = 6,
                Titulo = "Strong Woman Do Bong-soon",
                Genero = "KDrama",
                Anio = 2017,
                Imagen = "assets/img/kdrama2.jpg",
                Descripcion = "Una joven con fuerza sobrehumana consigue trabajo como guardaespaldas.",
                TrailerUrl = "https://youtu.be/AJTzY4-vIVk"
            },
            new Pelicula {
                Id = 7,
                Titulo = "Undercover High School",
                Genero = "KDrama",
                Anio = 2025,
                Imagen = "assets/img/kdrama3.jpg",
                Descripcion = "Un policía se infiltra en una preparatoria para investigar un crimen.",
                TrailerUrl = "https://youtu.be/fake-trailer-url"
            }
            new Pelicula {
                Id = 8,
                Titulo = "Night Has Come",
                Genero = "KDrama",
                Anio = 2023,
                Imagen = "assets/img/kdrama4.jpg",
                Descripcion = "Estudiantes atrapados en un juego mortal donde deben descubrir al impostor.",
                TrailerUrl = "https://youtu.be/fake-trailer-url"
            },
            new Pelicula {
                Id = 9,
                Titulo = "Leap Day",
                Genero = "KDrama",
                Anio = 2024,
                Imagen = "assets/img/kdrama5.jpg",
                Descripcion = "Una chica que solo cumple años cada 4 años encuentra el amor en el día bisiesto.",
                TrailerUrl = "https://youtu.be/fake-trailer-url"
            },
            new Pelicula {
                Id = 10,
                Titulo = "Love Out Loud",
                Genero = "KDrama",
                Anio = 2008,
                Imagen = "assets/img/kdrama6.jpg",
                Descripcion = "Una historia romántica que rompe barreras sociales y personales.",
                TrailerUrl = "https://youtu.be/fake-trailer-url"
            },
        };

        // Obtener todas las películas
        [HttpGet]
        public ActionResult<IEnumerable<Pelicula>> Get()
        {
            return Ok(peliculas);
        }

        // Obtener película por ID
        [HttpGet("{id}")]
        public ActionResult<Pelicula> GetById(int id)
        {
            var pelicula = peliculas.FirstOrDefault(p => p.Id == id);
            if (pelicula == null) return NotFound();
            return Ok(pelicula);
        }
    }

    // Modelo de Película actualizado con nuevos campos
    public class Pelicula
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Genero { get; set; }
        public int Anio { get; set; }
        public string Imagen { get; set; }
        public string Descripcion { get; set; }
        public string TrailerUrl { get; set; }
    }

}

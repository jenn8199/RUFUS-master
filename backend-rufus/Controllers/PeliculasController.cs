using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Linq;

namespace PeliculasAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PeliculasController : ControllerBase
    {
        private static List<Pelicula> peliculas = new List<Pelicula>
        {
            new Pelicula { Id = 1, Titulo = "Jeepers Creepers", Genero = "Terror", Anio = 2001, Imagen = "assets/img/terror1.jpg" },
            new Pelicula { Id = 2, Titulo = "Scream", Genero = "Terror", Anio = 1996, Imagen = "assets/img/terror2.jpg" },
            new Pelicula { Id = 3, Titulo = "Cadáver", Genero = "Terror", Anio = 2018, Imagen = "assets/img/terror3.jpg" },
            new Pelicula { Id = 4, Titulo = "Espíritus", Genero = "Terror", Anio = 2010, Imagen = "assets/img/terror4.jpg" },
            new Pelicula { Id = 5, Titulo = "La Noche del Demonio: La Puerta Roja", Genero = "Terror", Anio = 2023, Imagen = "assets/img/terror5.jpg" },
            new Pelicula { Id = 6, Titulo = "Strong Woman Do Bong-soon", Genero = "KDrama", Anio = 2017, Imagen = "assets/img/kdrama2.jpg" },
            new Pelicula { Id = 7, Titulo = "Undercover High School", Genero = "KDrama", Anio = 2025, Imagen = "assets/img/kdrama3.jpg" },
            new Pelicula { Id = 8, Titulo = "Night Has Come", Genero = "KDrama", Anio = 2023, Imagen = "assets/img/kdrama4.jpg" },
            new Pelicula { Id = 9, Titulo = "Leap Day", Genero = "KDrama", Anio = 2024, Imagen = "assets/img/kdrama5.jpg" },
            new Pelicula { Id = 10, Titulo = "Love Out Loud", Genero = "KDrama", Anio = 2008, Imagen = "assets/img/kdrama6.jpg" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Pelicula>> Get()
        {
            return Ok(peliculas);
        }

        [HttpGet("{id}")]
        public ActionResult<Pelicula> GetById(int id)
        {
            var pelicula = peliculas.FirstOrDefault(p => p.Id == id);
            if (pelicula == null) return NotFound();
            return Ok(pelicula);
        }
    }

    public class Pelicula
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Genero { get; set; }
        public int Anio { get; set; }
        public string Imagen { get; set; }
    }
}

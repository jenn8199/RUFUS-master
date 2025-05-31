using Microsoft.AspNetCore.Mvc;

namespace PeliculasAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PeliculasController : ControllerBase
    {
        private static List<Pelicula> peliculas = new List<Pelicula>
        {
            new Pelicula { Id = 1, Titulo = "Jeepeers Creepeers", Genero = "Terror", Anio = 2001 },
            new Pelicula { Id = 2, Titulo = "Scream", Genero = "Terror", Anio = 1996 },
            new Pelicula { Id = 2, Titulo = "Cadáver", Genero = "Terror", Anio = 2018 },
            new Pelicula { Id = 2, Titulo = "Espiritus", Genero = "Terror", Anio = 2010 },
            new Pelicula { Id = 2, Titulo = "La Noche del Demonio: La Puerta Roja", Genero = "Terror", Anio = 2023 },
            new Pelicula { Id = 2, Titulo = "Strong Woman Do Bong-soon", Genero = "KDrama", Anio = 2017 },
            new Pelicula { Id = 2, Titulo = "Undercover High School", Genero = "KDrama", Anio = 2025 },
            new Pelicula { Id = 2, Titulo = "Night Has Come ", Genero = "KDrama", Anio = 2023 },
            new Pelicula { Id = 2, Titulo = "Leap Day", Genero = "KDrama", Anio = 2024 },
            new Pelicula { Id = 2, Titulo = "Love Out Loud", Genero = "KDrama", Anio = 2008 }
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
    }
}

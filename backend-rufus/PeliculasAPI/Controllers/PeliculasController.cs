using Microsoft.AspNetCore.Mvc;
using PeliculasAPI.Models; // 👈 Importar el modelo externo
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
            new Pelicula { Id = 1, Titulo = "Ejemplo", Genero = "Terror", Anio = 2024, Imagen = "", Descripcion = "Descripción", TrailerUrl = "" }
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
}

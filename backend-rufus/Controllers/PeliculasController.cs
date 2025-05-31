using Microsoft.AspNetCore.Mvc;
using PeliculasAPI.Models;

namespace PeliculasAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PeliculasController : ControllerBase
    {
        private static readonly List<Pelicula> peliculas = new()
        {
            new Pelicula { Id = 1, Categoria = "terror", Titulo = "El Conjuro", Descripcion = "Terror paranormal" },
            new Pelicula { Id = 2, Categoria = "kdrama", Titulo = "Crash Landing on You", Descripcion = "Romance coreano" }
        };

        [HttpGet]
        public ActionResult<IEnumerable<Pelicula>> Get() => Ok(peliculas);

        [HttpGet("{id}")]
        public ActionResult<Pelicula> Get(int id)
        {
            var pelicula = peliculas.FirstOrDefault(p => p.Id == id);
            return pelicula == null ? NotFound() : Ok(pelicula);
        }
    }
}

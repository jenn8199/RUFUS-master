namespace PeliculasAPI.Models
{
    public class Pelicula
        {
            public int Id { get; set; }
            public string Titulo { get; set; }
            public string Genero { get; set; }
            public int Anio { get; set; }
            public string Imagen { get; set; }

            // Nuevas propiedades
            public string Descripcion { get; set; }
            public string TrailerUrl { get; set; }
        }

}

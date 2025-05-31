namespace PeliculasAPI.Models
{
    public class Pelicula
    {
        public int Id { get; set; }
        public string Categoria { get; set; } = "";
        public string Titulo { get; set; } = "";
        public string Descripcion { get; set; } = "";
    }
}

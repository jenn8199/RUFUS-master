using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace PeliculasAPI.Models
{
    public class User
    {
        public int Id { get; set; }  // <- Esta propiedad es necesaria

        public string NombreUsuario { get; set; } = string.Empty;

        public string Contrasena { get; set; } = string.Empty;
    }
}


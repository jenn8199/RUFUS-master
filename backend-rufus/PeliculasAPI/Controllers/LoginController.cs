using PeliculasAPI.Data;
using Microsoft.AspNetCore.Mvc;
using PeliculasAPI.Models;
using System.Linq;
using BCrypt.Net;

namespace PeliculasAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LoginController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public IActionResult Login([FromBody] LoginRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var usuario = _context.Users.FirstOrDefault(u => u.NombreUsuario == request.NombreUsuario);

            if (usuario == null || !BCrypt.Net.BCrypt.Verify(request.Contrasena, usuario.Contrasena))
            {
                return Unauthorized(new { mensaje = "Credenciales inválidas" });
            }

            // Aquí puedes generar un token JWT si quieres (opcional)

            return Ok(new
            {
                mensaje = "Inicio de sesión exitoso",
                usuario = new
                {
                    id = usuario.Id,
                    nombre = usuario.NombreUsuario
                }
            });
        }
    }
}

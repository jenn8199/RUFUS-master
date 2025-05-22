using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using testdbLoginAPI.Data;
using testdbLoginAPI.Models;

namespace testdbLoginAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {
        private readonly AppDbContext _context;

        public LoginController(AppDbContext context)
        {
            _context = context;
        }

        public class LoginRequest
        {
            public string Correo { get; set; }
            public string Password { get; set; }
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Correo == request.Correo && u.Password == request.Password);

            if (user != null)
            {
                return Ok(new { status = "ok", message = "Inicio de sesión exitoso." });
            }

            return Unauthorized(new { status = "error", message = "Correo o contraseña incorrectos." });
        }
    }
}

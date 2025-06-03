using Microsoft.EntityFrameworkCore;
using PeliculasAPI.Models;

namespace PeliculasAPI.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users { get; set; }
        public DbSet<Pelicula> Peliculas { get; set; }
    }
}

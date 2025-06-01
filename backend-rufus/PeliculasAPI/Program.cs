var builder = WebApplication.CreateBuilder(args);

// Agrega servicios para CORS (Cross-Origin Resource Sharing)
// Esto permite que tu API acepte solicitudes desde la URL de tu app Angular (localhost:4200)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp", policy =>
    {
        policy.WithOrigins("http://localhost:4200")  // URL permitida
              .AllowAnyHeader()                      // Permite cualquier encabezado HTTP
              .AllowAnyMethod();                     // Permite cualquier método (GET, POST, etc)
    });
});

// Agrega servicios para generar documentación Swagger de la API
builder.Services.AddEndpointsApiExplorer(); // Explora endpoints para Swagger
builder.Services.AddSwaggerGen();            // Genera UI Swagger para probar la API
builder.Services.AddControllers();           // Agrega soporte para controladores API (MVC)

// Construye la aplicación
var app = builder.Build();

// Habilita el routing, que permite que las rutas (URLs) sean reconocidas y dirigidas correctamente
app.UseRouting();

// Aplica la política de CORS configurada antes (debe ir después de UseRouting)
app.UseCors("AllowAngularApp");

// Solo en entorno de desarrollo habilita Swagger para poder probar y ver la documentación
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();      // Middleware para servir el JSON de Swagger
    app.UseSwaggerUI();    // Middleware para servir la interfaz web de Swagger
}

// Redirige todas las peticiones HTTP a HTTPS (seguridad)
app.UseHttpsRedirection();

// Middleware para autorización (útil cuando agregues autenticación)
// Actualmente no tienes reglas de autorización configuradas
app.UseAuthorization();

// Mapea los controladores para que respondan a las rutas configuradas
// Esto conecta las rutas de tus controladores con el pipeline HTTP
app.MapControllers();

// Ejecuta la aplicación, inicia el servidor y escucha peticiones HTTP
app.Run();

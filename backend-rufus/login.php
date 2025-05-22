<?php
// Habilitar CORS
header("Access-Control-Allow-Origin: *"); // Puedes reemplazar * por http://localhost:50846 si prefieres
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Credentials: true");

// Manejo de preflight (opcional pero recomendable)
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

session_start();

// 1. Conexión
include 'conexion.php'; // Asegúrate que esto conecte correctamente con SQL Server

// 2. Obtener datos desde el cuerpo JSON
$data = json_decode(file_get_contents("php://input"), true);
$correo = $data['email'] ?? '';
$password = $data['password'] ?? '';

// 3. Validación mínima
if (empty($correo) || empty($password)) {
    http_response_code(400);
    echo json_encode("Faltan datos");
    exit();
}

// 4. Llamar al procedimiento almacenado
$sql = "{CALL ValidarLogin(?, ?)}";
$params = array($correo, $password);
$stmt = sqlsrv_query($conn, $sql, $params);

if ($stmt === false) {
    http_response_code(500);
    echo json_encode("Error en la consulta");
    exit();
}

// 5. Verificar resultado
if ($row = sqlsrv_fetch_array($stmt, SQLSRV_FETCH_ASSOC)) {
    if ($row['resultado'] == 1) {
        $_SESSION['correo'] = $correo;
        echo json_encode("ok");
    } else {
        echo json_encode("error");
    }
} else {
    echo json_encode("error");
}

// 6. Cerrar conexión
sqlsrv_free_stmt($stmt);
sqlsrv_close($conn);
?>

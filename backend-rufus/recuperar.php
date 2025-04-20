<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
$email = $data->email ?? '';

if (empty($email)) {
    echo json_encode(["success" => false, "message" => "El campo email es obligatorio."]);
    exit;
}

// Simulación de verificación en base de datos
$consulta = $conexion->prepare("SELECT * FROM users WHERE email = ?");
$consulta->bind_param("s", $email);
$consulta->execute();
$resultado = $consulta->get_result();


if ($resultado->num_rows > 0) {
    echo json_encode(["success" => true, "message" => "Si el correo está registrado, recibirás instrucciones para restablecer tu contraseña."]);
} else {
    echo json_encode(["success" => true, "message" => "Si el correo está registrado, recibirás instrucciones para restablecer tu contraseña."]);
}
?>

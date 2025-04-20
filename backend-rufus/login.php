<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Headers: Content-Type");

include 'conexion.php';

$data = json_decode(file_get_contents("php://input"));
file_put_contents("log.txt", print_r($data, true)); // guarda en un archivo

$email = $data->email ?? '';
$password = $data->password ?? '';

if ($email === '' || $password === '') {
    echo json_encode(["success" => false, "message" => "Faltan campos"]);
    exit;
}

$consulta = $conexion->prepare("SELECT * FROM users WHERE email = ? AND password = ?");
$consulta->bind_param("ss", $email, $password);
$consulta->execute();
$resultado = $consulta->get_result();

if ($resultado->num_rows > 0) {
    echo json_encode(["success" => true]);
} else {
    echo json_encode(["success" => false, "message" => "Credenciales incorrectas"]);
}
?>

<?php
$host = "localhost";
$user = "root";
$password = ""; // sin contraseña por defecto en XAMPP
$db = "rufus";

$conexion = new mysqli($host, $user, $password, $db);

// Verifica la conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
?>

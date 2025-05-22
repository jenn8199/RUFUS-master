<?php
$serverName = "Jennifer\\MSSQLSERVER01";

$connectionOptions = array(
    "Database" => "testdb",
    "Authentication" => "Windows"
);

$conn = sqlsrv_connect($serverName, $connectionOptions);

if ($conn === false) {
    echo "Error en la conexión:<br>";
    print_r(sqlsrv_errors());
    die();
} else {
    echo "Conexión exitosa con autenticación de Windows";
}
?>

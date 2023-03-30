<?php
// Conexión a la base de datos
include("conn.php");

// Se verifica si he recibido datos a través de post
if(!empty($_POST)){
    global $pdo;
    $nombre=$_REQUEST['nameCat'];
	$sql = "INSERT INTO categorias(nombre) VALUES('$nombre')";
	$statement = $pdo->prepare($sql);
	$statement->execute();

    if($statement){
        echo "<script>$('#modal-success').modal('show');</script>";
    }
}

// Se llena la tabla con los datos obtenidos de la base de datos
global $pdo;
$sql = "SELECT * FROM categorias";
$statement = $pdo->prepare($sql);

$statement->execute();
$results=$statement->fetchAll();

if($results==NULL){
    echo "<h3>Datos no encontrados</h3>";
}else{
    // Se recorre el resultado con todos los registros
    foreach($results as $data => $column){
        echo "<tr>";
        echo "<td>".$column['nombre']."</td>";
        echo "</tr>";
    }
}
?>

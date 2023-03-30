<?php
// Conexión a la base de datos
include("conn.php");

// Se verifica si he recibido datos a través de post
if(!empty($_POST)){
    global $pdo;
    $codigo=$_REQUEST['clavePro'];
    $nombre=$_REQUEST['namePro'];
    $descripcion=$_REQUEST['descrip'];
    $id_categoria=$_REQUEST['categoria'];
    $precioVenta=$_REQUEST['precioV'];
    $precioCompra=$_REQUEST['precioC'];
	$sql = "INSERT INTO productos(codigo,nombre,descripcion,precio_venta,precio_compra,id_categoria) VALUES('$codigo','$nombre','$descripcion','$precioVenta','$precioCompra','$id_categoria')";
	$statement = $pdo->prepare($sql);
	$statement->execute();

    if($statement){
        echo "<script>$('#modal-success').modal('show');</script>";
    }
}

// Se llena la tabla con los datos obtenidos de la base de datos
global $pdo;
$sql = "SELECT productos.codigo, productos.nombre, productos.descripcion, productos.precio_venta, productos.precio_compra, categorias.nombre as nombre_categoria FROM productos INNER JOIN categorias ON productos.id_categoria=categorias.id;
";
$statement = $pdo->prepare($sql);

$statement->execute();
$results=$statement->fetchAll();

if($results==NULL){
    echo "<h3>Datos no encontrados</h3>";
}else{
    // Se recorre el resultado con todos los registros
    foreach($results as $data => $column){
        echo "<tr>";
	echo "<td>".$column['codigo']."</td>";
        echo "<td>".$column['nombre']."</td>";
        echo "<td>".$column['descripcion']."</td>";
        echo "<td>".$column['precio_venta']."</td>";
        echo "<td>".$column['precio_compra']."</td>";
        echo "<td>".$column['nombre_categoria']."</td>";
        echo "</tr>";
    }
}
?>

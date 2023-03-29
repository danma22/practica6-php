<?php

	$dsn = 'mysql:dbname=tienda;host=localhost;';
	$user = 'root';
	$password = 'Daniel_12';

	try{
		$pdo = new PDO($dsn, $user, $password);
	}catch( PDOException $e ){
		echo 'Error al conectarnos: ' . $e->getMessage();
	}
?>

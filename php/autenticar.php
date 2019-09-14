<?php
error_reporting(0);
ini_set('display_errors', 1);
require('../key/con_my.php');

class Autenticar
{
	function crearSesion($user, $pwd){
		  $clsCon = new mySqlConnect();
		  $query = "SELECT
					usuario, contrasena, id_persona
				 FROM persona
				 WHERE estado =1 AND usuario='".$user."' AND contrasena='".$pwd."'";

       $result = $clsCon->ConectarPM($query);

       session_destroy();
       session_start();

       while($row = $result->fetch_assoc()) {

       	
       	$_SESSION["user"] = $row['usuario'];
       	$_SESSION["id"] = $row['id_persona'];      
       	
					}
					//echo $row['usuario'];
						
       	
	}
}
?>

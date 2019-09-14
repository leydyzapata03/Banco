<?php
session_start();
/*if(is_null($_SESSION["user"])){

    
  }

  else
  {
   session_destroy();
  }
  */
  if(empty($_POST)){
  	header('location: ../index.php');
  }
  //require_once('executeREST.php');
  require('autenticar.php');

  $autenticar = new Autenticar();
  $autenticar->crearSesion($_POST['user'], $_POST['password']);

  if($_SESSION["user"] == ''){
    header("Location: ../index.php?l=wrong");
    exit;
  }
  header("Location: list.php");
?>

<?php
require('Banco.php');
session_start();
$accion = $_GET['accion'];
if(isset($accion))
{
 
  $saldo = $_GET['saldo'];
  $retiro = $_GET['retiro'];

  if($retiro>=$saldo)
    {
      echo"<script>alert('La cantidad a retirar es mayor que el saldo disponible');
    document.location=('../php/list.php')</script>";
  }

else{

 $Banco = new Banco();
  $Banco->setnumero_cuenta($_GET['numero']);
  $saldo = $saldo-$retiro;
  $Banco->setsaldo($saldo);

if($Banco->Retiro()!=false)
  {
 
    echo"<script>alert('Retiro satisfactorio');
    document.location=('../php/list.php')</script>";

      }
  else {
    echo"<script>alert('Hubo un error al intentar crear la cuenta');
    document.location=('../php/CreateUser.php')</script>
          </script>";

}

}

}

else
{

  $Banco = new Banco();
  $Banco->setfecha(date("Y-m-d"));
  $Banco->setnumero_cuenta($_GET['numero']);
  $Banco->setsaldo($_GET['saldo']);
  $Banco->settipo($_GET['tipo']);
  $Banco->setusuario($_SESSION["id"]);
if( $Banco->CrearProducto()!=false)
  {
 
    echo"<script>alert('Se ha creado la cuenta');
    document.location=('../php/list.php')</script>";

      }
  else {
    echo"<script>alert('Hubo un error al intentar crear la cuenta');
    document.location=('../php/CreateUser.php')</script>
          </script>";

  }
}





 
 
  
    
    
  
















 ?>

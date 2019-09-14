<?php
error_reporting(0);
ini_set('display_errors', 1);
require('../key/con_my.php');
class Banco{

private $uid;
private $fecha_apertura;
private $numero_cuenta;
private $saldo;
private $tipo_cuenta;
private $usuario;



public function getuid(){
		return $this->uid;
	}

	public function setuid($uid){
		$this->uid= $uid;
	}

	public function getfecha(){
			return $this->fecha_apertura;
		}

		public function setfecha($fecha_apertura){
			$this->fecha_apertura= $fecha_apertura;
		}

  public function getnumero_cuenta(){
  		return $this->numero_cuenta;
  	}

  public function setnumero_cuenta($numero_cuenta){
  		$this->numero_cuenta= $numero_cuenta;
  	}

  public function getsaldo(){
      		return $this->saldo;
      	}

  public function setsaldo($saldo){
      		$this->saldo= $saldo;
      	}

      	  public function gettipo(){
      		return $this->tipo_cuenta;
      	}

  public function settipo($tipo_cuenta){
      		$this->tipo_cuenta= $tipo_cuenta;
      	}

      	public function getusuario(){
      		return $this->usuario;
      	}

  public function setusuario($usuario){
      		$this->usuario= $usuario;
      	}



				
		



function ListarProductos($user){
		  $clsCon = new mySqlConnect();
		 

		  $query =  "SELECT g.id_gestion, g.fecha_apertura, g.tipo_cuenta, g.numero_cuenta, g.saldo FROM gestion g INNER JOIN persona p ON p.id_persona = g.id_persona WHERE estado =1 AND usuario='leydy'";

       $result = $clsCon->ConectarPM($query);
       return $result;

      } 
	

	function CrearProducto(){
		
		  $clsCon = new mySqlConnect();
		  $query = "INSERT INTO gestion VALUES (null,'$this->saldo','$this->numero_cuenta','$this->usuario','$this->tipo_cuenta','$this->fecha_apertura')";
		 

       $result = $clsCon->ConectarPM($query);
       return $result;

       
	}

	function Retiro(){
		
		  $clsCon = new mySqlConnect();
		  $query ="UPDATE gestion set saldo='$this->saldo' where numero_cuenta='$this->numero_cuenta'";

		 

       $result = $clsCon->ConectarPM($query);
       return $result;

       
	}

	



	 




}


?>

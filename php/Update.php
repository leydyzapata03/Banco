<?php
session_start();

  if(empty($_SESSION)){
	  header('Location: ../index.php');
  }

?>


<!DOCTYPE html>
<html lang="es-sv">
<head>
	<link rel="icon" href="../images/logo_bank.png">
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<meta name="author" content="onelink@onelinkbpo.com">
	<meta name="owner" content="Onelink SA de CV">
	<meta name="keywords" content="">
	<meta name="robots" content="index, follow">
	<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/icon?family=Material+Icons">
	<link rel="stylesheet" href="../css/paper.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.15/css/jquery.dataTables.min.css">
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.15/css/dataTables.bootstrap.min.css">
	<link rel="stylesheet" href="../css/sweetalert2.min.css">
	<link rel="stylesheet" href="../css/myDataTables.css">
	<link rel="stylesheet" href="../css/style.css">
	<link rel="stylesheet" href="../css/preloader.css">
</head>
<body>
	<main>
		<!-- Page Loader -->
		<div class="page-loader-wrapper">
			<div class="loader">
				<div class="preloader">
					<div class="spinner-layer pl-red">
						<div class="circle-clipper left">
							<div class="circle"></div>
						</div>
						<div class="circle-clipper right">
							<div class="circle"></div>
						</div>
					</div>
				</div>
				<p>Cargando.</p>
			</div>
		</div>
		<!-- #END# Page Loader -->
	<nav class="navbar navbar-default">
				<div class="navbar-header">
					<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a class="navbar-brand" href="list.php"><img src="../images/logo_bank.png" alt="claro logo" height="60px"></a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						
						
  						
  					
            
              <li ><a href='CreateUser.php'><i class='material-icons right'>add</i>Crear Cuenta</a></li>
           

            
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li><a href="changepassword.php">[Contraseña]</a></li>
						<li><a href="logout.php">Logout (<?php echo $_SESSION["user"];?>)</a></li>
					</ul>
				</div>
			</nav>
		<div class="header">
			<div class="row">
			</div>
          </div><br>
		<div id="contenedor"style="background-color:#979594" >
			<div class="fixed-action-btn" data-toggle="tooltip" data-placement="left" title="Filtrar" data-original-title="Tooltip on left" id="agregarCaso">

			</div>
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<h3 class="title center">Retiros</h3>
						<div class="panel panel-default">
							<div class="panel-body">
								<form method="GET" id="formulario" action="UserController.php">

	<div class="row">
		<div class="col-md-12">
		
			<div class="form-group">

				<div class="col-md-3">
						<label>Número de cuenta <i style="color:red;witdth:5px" >*</i></label>
							<input  type="number" readonly required id="numero" value="<?php echo !empty($_REQUEST['id'])?$_REQUEST['id']:'';?>" name="numero"class="form-control" >
					</div>
<div class="col-md-3">
	<label>Saldo disponible <i style="color:red;witdth:5px" >*</i></label>.<br>


							<input  type="number" readonly required id="saldo" value="<?php echo !empty($_REQUEST['saldo'])?$_REQUEST['saldo']:'';?>" name="saldo"class="form-control" >
			</div>
					<div class="col-md-3">
						<label>Cantidad a retirar<i style="color:red;witdth:5px" >*</i></label>
							<input type="number" required id="retiro" name="retiro" class="form-control">
					</div>
					<div class="col-md-3">
						
							<input  type="hidden" required id="accion" value="1" name="accion"class="form-control" >
			</div>
			</div>
			
		</div>
	</div>
	<br>
	<div class="form-group" >
		<div class="col-md-3">


	</div>
		<div class="col-md-3">
			<center>
			<button  id="enviar" name="enviar" style="width:90px;color:Black;align:right" class="btn btn-default" type="submit">Retirar</button>

	</div>

	<div class="col-md-3">
		<center>
	<a href="list.php" class="btn btn-default" ><span  class="glyphicon glyphicon-exclamation-sign"></span> Cancelar</a>
	</center>

</div>



		</div>
	</form>


			</div>
		</div>
	   </main>
	<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
	<script type="text/javascript" src="https://cdn.datatables.net/1.10.15/js/jquery.dataTables.min.js"></script>
     <script type="text/javascript" src="https://cdn.datatables.net/1.10.15/js/dataTables.material.min.js"></script>
	<!-- <script src="../js/sweetalert2.min.js"></script> -->
	<script src="https://unpkg.com/sweetalert2@7.0.7/dist/sweetalert2.all.js"></script>
	<script src="../js/bootstrap.min.js"></script>
	<script src="../js/init.js"></script>
   </body>
</html>

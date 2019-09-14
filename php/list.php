<?php
  session_start();
 
  /*if(is_null($_SESSION['access_token'])){
	  header('Location: ../index.php');
  }
  if(isset($_GET['error_caso'])){
		$error = $_GET['error_caso'];
		$mensaje = base64_decode($error);
  }

  require_once('executeREST.php');
  $url = $_SESSION['url'].'/api/1.0/'.$_SESSION['ws'].'/cases/draft';
  $case_list = executeREST( $url, 'GET', array(), $_SESSION['access_token'] );*/

  

?>
<!DOCTYPE html>
<html lang="es-sv">
	<head>
		<link rel="icon" href="../images/logo_bank.png">
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<meta name="author" content="Onelink">
		<meta name="owner" content="Onelink">
		<meta name="keywords" content="">
		<meta name="robots" content="index, follow">
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/icon?family=Material+Icons">
		<link rel="stylesheet" href="../css/paper.css">
		<link rel="stylesheet" href="../css/jquery.dataTables.min.css">
		<link rel="stylesheet" href="../css/dataTables.bootstrap.min.css">
		<link rel="stylesheet" href="../css/sweetalert2.min.css">
		<link rel="stylesheet" href="../css/myDataTables.css">
		<link rel="stylesheet" href="../css/style.css">
		<link rel="stylesheet" href="../css/preloader.css">
		<link rel="stylesheet" href="../css/iziToast.css">
		<script src="../js/iziToast.min.js"></script>
	</head>
	<body>
		<?php
			if(isset($_GET['error_caso'])){
				if(isset($error) || $error != NULL){
				echo "<script>
					iziToast.show({
						theme: 'dark',
						icon: 'icon-person',
						image: '../images/PMK_logo_material.png',
						message: 'Ha ocurrido un error: " .$mensaje. " ',
						position: 'bottomRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
						progressBarColor: 'rgb(0, 255, 184)'
					});
				</script>";
				}
			}
		?>
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
						
						
  						
  					
            
              <li><a href='Create.php'><i class='material-icons right'>add</i>Crear Cuenta</a></li>
           

            
					</ul>
					<ul class="nav navbar-nav navbar-right">
						<li><a href="changepassword.php">[Contraseña]</a></li>
						<li><a href="logout.php">Logout (<?php echo $_SESSION["user"];?>)</a></li>
					</ul>
				</div>
			</nav>


			<div class="header"style="background-color:#979594">
				<div class="row">
				</div>
	          </div><br>
			<div id="contenedor">
        <div class="form-group">
        <div class="col-sm-10 col-sm-offset-2">
            <?php
if(isset($result))

            echo $result; ?>
        </div>
    </div>
				<div class="container">
					<div class="row">
						<div class="col-xs-12">
							<h3 class="title center"><!--Lista de casos--></h3>
							<div class="panel panel-default">
								<div class="panel-body">
									<center>
										<h5>Bienvenido</h5>
										<form class="" action="Create.php" method="post" id="newCaseForm">
											<input type="hidden" name="tasUID" value="7974853515a0f0e5b89ea97008445689">
												<button id="btnNewCase" type="button" class="btn btn-floating btn-large" style="background-color: #009688;"><i class="material-icons">add</i></button>
										</form>
<table id="tablaCasos" class="table table-striped table-hover table-bordered display order-column compact" cellspacing="0" width="100%">
									<thead>

											<th>ID</th>
											<th>Fecha de Apertura</th>
											<th>Tipo de cuenta</th>
											<th>Número de cuenta</th>
											<th>Saldo Disponible</th>
											<th>Action</th>

											



									</thead>
									<tbody>

									<?php

									require('Banco.php');
									$Banco = New Banco();

									$oPage = $Banco->ListarProductos($_SESSION["user"]);





											foreach ($oPage as $oProducto) {
print"<tr>";
print'<td ">'. $oProducto['id_gestion'] . '</td>';
print'<td ">'. $oProducto['fecha_apertura'] . '</td>';
print'<td ">'. $oProducto['tipo_cuenta'] . '</td>';
print'<td ">'. $oProducto['numero_cuenta'] . '</td>';
print'<td ">'. $oProducto['saldo'] . '</td>';


 print '<td >';
 print '<a class="btn btn-default"  style="color:black" href="Update.php?id='.$oProducto['numero_cuenta'].'&saldo='.$oProducto['saldo'].'"><span class="glyphicon glyphicon-euro"></span> Retiro Dinero</a>';
 print '</td>';
print'</tr>';
											}


									?>

									</center>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		   </main>
		<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
		<script type="text/javascript" src="../js/jquery.dataTables.min.js"></script>
        <script type="text/javascript" src="../js/dataTables.material.min.js"></script>
		<script src="../js/sweetalert2.min.js"></script>
		<!-- <script src="https://unpkg.com/sweetalert2@7.0.7/dist/sweetalert2.all.js"></script> -->
		<script src="../js/bootstrap.min.js"></script>
		<script src="../js/init.js"></script>
	   </body>
   </html>

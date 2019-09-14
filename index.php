<?php
 include_once('header.html');
 //$error = $_GET['error'];
 /*if(isset($error) || $error != NULL){
	echo "<script>
	iziToast.show({
		theme: 'dark',
		icon: 'icon-person',
		image: 'images/PMK_logo_material.png',
		message: 'Error en las credenciales!',
		position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
		progressBarColor: 'rgb(0, 255, 184)'
	});
	</script>";
 }*/
?>
<div class="login-page" style="background-color:#979594">
	<div class="content">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-sm-8 col-xs-12 col-md-offset-4 col-sm-offset-2 col-xs-offset-0">
					<?php
					if(isset($_GET['l']) && $_GET['l'] == 'wrong'){						
					?>
					<div style="border:solid 1px #ff7979; border-radius:4px; padding: 4px 4px 4px 4px; background-color:#ff7979;color:#fff">
						<center>Usuario o contraseña incorrectos</center>
						</div>					
					<?php 							
					}
				   	?>
					<form  action="php/login.php" method="post">
						<div class="card">
						<div class="head text-center"><img src="images/logo_bank.png" alt="ClaroLogo" height="100px"></div>
						<div class="content">
							<div class="form-group">
								<label>Usuario</label>
								<input type="text" placeholder="Usuario" class="form-control" name="user" required>
							</div>
							<div class="form-group">
								<label>Contrase&ntilde;a</label>
								<input type="password" placeholder="Contrase&ntilde;a" class="form-control" name="password" required>
							</div>
						</div>
						<div class="text-center">
							<input type="submit" class="btn btn-fill btn-wd" value="Iniciar" id="btnLogin">
						</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<?php
 include_once('footer.html');
?>

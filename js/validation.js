
//Funciones para las validaciones de cada formulario
jQuery.validator.addMethod("lettersonly", function(value, element) {
	return this.optional(element) || /^[-+]?[a-z áéíóúüñ A-Z ÁÉÍÓÚÜÑ]+$/i.test(value);
  }, "No se permiten numeros");
  
  jQuery.extend(jQuery.validator.messages, {
	  required: "Este campo es requerido",
	  number: "Solo se permiten numeros",
	  lettersonly: "Solo se permiten letras"
  });
  //Formulario Activación de paquete de datos
  function validateAPD(){
	  $("#accionAPD").hide();
	  $("#motivoAPD").hide();
	  $("#motivoAPD2").hide();
	  $("#motivoAPD3").hide();
	  $("#checkAPD input").prop('checked', true);
	  $("#checkAPD input").val("1");
	  $("#checkAPD").hide();
	  $("#nivelServicioAPD").find("select").val("2");
  
	  $("form[name='case1']").change(function(){
		  $("#cambioServicioAPD_label").val($("#cambioServicioAPD").find("option:selected").text());
		  $("#tipoDocAPD_label").val($("#tipoDocAPD").find("option:selected").text());
		  $("#nivelServicioAPD_label").val($("#nivelServicioAPD").find("option:selected").text());
	  });
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudAPD: "required",
			  nomSolicitanteAPD: "required lettersonly",
			  cambioServicioAPD: "required",
			  cedulaCiudadanaAPD: "required number",
			  nivelServicioAPD: "required",
			  nomSolicitudAP: "required",
			  minClienteAPD: "number"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();        
		  }
	  });
  }
  
  //Formulario Bloqueo internet, MMS
  function validateBloqMMS(){
	  $("#motivoBloqSmsContenido").hide();
	  $("#motivoBloqSmsContenido2").hide();
	  $("#motivoBloqSmsContenido3").hide();
	  $("#accionBloqSmsContenido").hide();
	  $("#checkBloqSmsContenido input").prop('checked', true);
	  $("#checkBloqSmsContenido input").val("1");
	  $("#checkBloqSmsContenido").hide();
	  $("#nivelServicioBloqSmsContenido").find("select").val("2");
	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		  $("#tipoDocBloqSmsContenido_label").val($("#tipoDocBloqSmsContenido").find("option:selected").text());
		  $("#nivelServicioBloqSmsContenido_label").val($("#nivelServicioBloqSmsContenido").find("option:selected").text());
	  });
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudBloqSmsContenido: "required",
			  nomSolicitanteBloqSmsContenido: "required lettersonly",
			  camServicioBloqSmsContenido: "required",
			  cedulaBloqSmsContenido: "required number",
			  custCodeUsuarioBloqSmsContenido: "required",
			  minBloqSmsContenido: "required number"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  
  //Formulario Bloqueo de servicios
  function validateBloSerAdicionales(){
	  $("#motivoBloSerAdicionales").hide();
	  $("#motivoBloSerAdicionales2").hide();
	  $("#motivoBloSerAdicionales3").hide();
	  $("#accionBloSerAdicionales").hide();
	  $("#checkBloSerAdicionales input").prop('checked', true);
	  $("#checkBloSerAdicionales input").val("1");
	  $("#checkBloSerAdicionales").hide();
	  $("#nivelServicioBloSerAdicionales").find("select").val("2");
  
	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		  $("#cambServicioBloSerAdicionales_label").val($("#cambServicioBloSerAdicionales").find("option:selected").text());
		  $("#tipoDocBloSerAdicionales_label").val($("#tipoDocBloSerAdicionales").find("option:selected").text());
		  $("#nivelServicioBloSerAdicionales_label").val($("#nivelServicioBloSerAdicionales").find("option:selected").text());
		  $('#jsonBloSerAdicionales').val(JSON.stringify($('.selectpicker').val()));
		  
	  });
  
	  $("#cambServicioBloSerAdicionales").find("select").addClass("selectpicker");
	  $("#cambServicioBloSerAdicionales").find("select").attr("multiple","");
	  $(".selectpicker option").removeAttr("selected");
	  $("#cambServicioBloSerAdicionales").css({"word-wrap":"break-word","max-width":"360px"});
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudBloSerAdicionales: "required",
			  nomSolicitanteBloSerAdicionales: "required lettersonly",
			  cedulaBloSerAdicionales: "required number",
			  minBloSerAdicionales: "required number"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  
  
  //Formulario Cambios demograficos
  function validateCambDemograficos(){
	  $("#motivoCambDemograficos").hide();
	  $("#motivoCambDemograficos2").hide();
	  $("#motivoCambDemograficos3").hide();
	  $("#accionCambDemograficos").hide();
	  $("#checkCambDemograficos input").prop('checked', true);
	  $("#checkCambDemograficos input").val("1");
	  $("#checkCambDemograficos").hide();
	  $("#nivelTramiteCambDemograficos").find("select").val("2");
  
	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		  $("#camServicioCambDemograficos_label").val($("#camServicioCambDemograficos").find("option:selected").text());
		  $("#tipoDocCambDemograficos_label").val($("#tipoDocCambDemograficos").find("option:selected").text());
		  $("#nivelTramiteCambDemograficos_label").val($("#nivelTramiteCambDemograficos").find("option:selected").text());
	  });
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudCambDemograficos: "required",
			  nomSolicitanteCambDemograficos: "required lettersonly",
			  cedulaCambDemograficos: "required number",
			  minCambDemograficos: "required number",
			  nomSolicitudCambDemograficos : "required"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  
  //Formulario Cambio de ciclo
  function validateCamCiclo(){
	  $("#motivoCamCiclo").hide();
	  $("#motivoCamCiclo2").hide();
	  $("#motivoCamCiclo3").hide();
	  $("#accionCamCiclo").hide();
	  $("#checkCC input").prop('checked', true);
	  $("#checkCC input").val("1");
	  $("#checkCC").hide();
	  $("#nivelServicioCC").find("select").val("2");
  
	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		  $("#tipoDocCC_label").val($("#tipoDocCC").find("option:selected").text());
		  $("#nivelServicioCC_label").val($("#nivelServicioCC").find("option:selected").text());
		  $("#conSinCostoCC_label").val($("#conSinCostoCC").find("option:selected").text());
	  });
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudCC: "required",
			  nomSolicitanteCC: "required lettersonly",
			  nomTitularCC: "required",
			  minCC: "number",
			  cedulaCC: "number"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  
  //Formulario Cambio de elegidos
  function validateCambElegidos(){
	  $("#motivoCambElegidos").hide();
	  $("#motivoCambElegidos2").hide();
	  $("#motivoCambElegidos3").hide();
	  $("#accionCambElegidos").hide();
	  $("#checkCambElegidos input").prop('checked', true);
	  $("#checkCambElegidos input").val("1");
	  $("#checkCambElegidos").hide();
	  $("#nivelSolicitudCambElegidos").find("select").val("2");
  
	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		  $("#costoCambElegidos_label").val($("#costoCambElegidos").find("option:selected").text());
		  $("#nivelSolicitudCambElegidos_label").val($("#nivelSolicitudCambElegidos").find("option:selected").text());
		  $("#tipoDocCambElegidos_label").val($("#tipoDocCambElegidos").find("option:selected").text());
	  });
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudCambElegidos: "required",
			  nomSolicitanteCambElegidos: "required lettersonly",
			  nomreCambElegidos: "required lettersonly",
			  minCambElegidos: "number"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  
	  for(count = 2; count<=9; count++){
		  $("#RelacionarElegidosCambElegidosActual"+count+"").siblings().hide();
		  $("#RelacionarElegidosCambElegidosActual"+count+"").hide();
		  $("#RelacionarElegidosCambElegidosNuevo"+count+"").hide();
	  }
	  var i = 1;
	  //agregar actual y nuevo
	  $("#gridAgregar").click(function(){
		  if(i > 9){
			  return false;
		  }
		  i++;
		  $("#RelacionarElegidosCambElegidosActual"+i+"").siblings().show();
		  $("#RelacionarElegidosCambElegidosActual"+i+"").show();
		  $("#RelacionarElegidosCambElegidosNuevo"+i+"").show();
	  });
	  //remove actual y nuevo
	  $("#gridBorrar").click(function(){
		  if(i < 2){
			  return false;
		  }
		  $("#RelacionarElegidosCambElegidosActual"+i+"").siblings().hide();
		  $("#RelacionarElegidosCambElegidosActual"+i+"").hide();
		  $("#RelacionarElegidosCambElegidosNuevo"+i+"").hide();
		  $("#RelacionarElegidosCambElegidosActual"+i+"").val("");
		  $("#RelacionarElegidosCambElegidosNuevo"+i+"").val("");
		  i--;
	  });
  }
  
  //Formulario Cambio de tecnología
  function validateCT(){
	  $("#motivoCT").hide();
	  $("#motivoCT2").hide();
	  $("#motivoCT3").hide();
	  $("#accionCT").hide();
	  $("#checkCT input").prop('checked', true);
	  $("#checkCT input").val("1");
	  $("#checkCT").hide();
	  $("#nivelSolicitudCT").find("select").val("2");

	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		$("#cambioServicioCT_label").val($("#cambioServicioCT").find("option:selected").text());
		$("#tipoDocCT_label").val($("#tipoDocCT").find("option:selected").text());
		$("#nivelServicioCT_label").val($("#nivelServicioCT").find("option:selected").text());
	});
	  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudCT: "required",
			  nomSolicitanteCT: "required lettersonly",
			  minCT: "number",
			  nomTitularCT: "required lettersonly",
			  // cedulaCT: "required number",
			  planActualClienteCT: "required",
			  valorCfmIvaCT:"required number",
			  nuevoPlanCT: "required"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  
  //Formulario Cambio de Min
  function validateCamMin(){
	  $("#motivoCamMin").hide();
	  $("#motivoCamMin2").hide();
	  $("#motivoCamMin3").hide();
	  $("#accionCamMin").hide();
	  $("#checkCamMin input").prop('checked', true);
	  $("#checkCamMin input").val("1");
	  $("#checkCamMin").hide();
	  $("#nivelServicioCamMin").find("select").val("2");
  
	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		  $("#tipoDocCamMin_label").val($("#tipoDocCamMin").find("option:selected").text());
		  $("#nivelServicioCamMin_label").val($("#nivelServicioCamMin").find("option:selected").text());
	  });
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudCamMin: "required",
			  nomSolicitanteCamMin: "required lettersonly",
			  nomTitularCamMin: "required lettersonly",
			  minCamMin: "required",
			  cedulaCamMin: "number"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  
  //Formulario Cambio plan a corte
  function validateCambPlanFecha(){
	  $("#motivoCambPlanFecha").hide();
	  $("#motivoCambPlanFecha2").hide();
	  $("#motivoCambPlanFecha3").hide();
	  $("#accionCambPlanFecha").hide();
	  $("#checkCambPlanFecha input").prop('checked', true);
	  $("#checkCambPlanFecha input").val("1");
	  $("#checkCambPlanFecha").hide();
	  $("#fechaCorteCambPlanFecha").find("input").attr("type","date");
	  $("#fechaCorteCambPlanFecha").find("input").removeAttr("disabled");
	  $("#fechaCorteCambPlanFecha").removeAttr("disabled");
	  $("fieldset").removeAttr("disabled");

	//agregar contenido a los _label
	$("form[name='case1']").change(function(){
		$("#cambioServicioCambPlanFecha_label").val($("#cambioServicioCambPlanFecha").find("option:selected").text());
		$("#tipoDocCambPlanFecha_label").val($("#tipoDocCambPlanFecha").find("option:selected").text());
		$("#nivelServicioCambPlanFecha_label").val($("#nivelServicioCambPlanFecha").find("option:selected").text());
	});

	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudCambPlanFecha: "required",
			  nomTitularCambPlanFecha: "required lettersonly",
			  minCambPlanFecha: "number",
			  planActualCambPlanFecha: "required",
			  planSolicitadoCambPlanFecha: "required",
			  fechaCorteCambPlanFecha: "required date"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  
  //Formulario Cambio plan inmediato
  function validateCPInmediato(){
	  $("#motivoCPInmediato").hide();
	  $("#motivoCPInmediato2").hide();
	  $("#motivoCPInmediato3").hide();
	  $("#accionCPInmediato").hide();
	  $("#checkCPInmediato input").prop('checked', true);
	  $("#checkCPInmediato input").val("1");
	  $("#checkCPInmediato").hide();
	  $("form[name='case1']").validate({
		  rules: {
			  fechaCPInmediato: "required",
			  nomSolicitanteCPInmediato: "required lettersonly",
			  nombreTitularCPInmediato: "required",
			  nuevoPlanCPInmediato: "required",
			  minCPInmediato: " required number"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  
  //Formulario Certificación garantía
  function validateCerGar(){
	  $("#motivoCerGar").hide();
	  $("#motivoCerGar2").hide();
	  $("#motivoCerGar3").hide();
	  $("#accionCerGar").hide();
	  $("#checkCerGar input").prop('checked', true);
	  $("#checkCerGar input").val("1");
	  $("#checkCerGar").hide();
	  $("#nivelServicioCerGar").find("select").val("2");
  
	  //Quitar Validaciones
	  // $('#nomSolicitanteCerGar').removeAttr('required');​​​​​
	  // $('#minCerGar').removeAttr('required');​​​​​
	  // $('#custCodeUsuarioCerGar').removeAttr('required');​​​​​
	  // $('#tipoDocCerGar').removeAttr('required');​​​​​
	  // $('#documentoCerGar').removeAttr('required');​​​​​
	  // $('#nivelServicioCerGar').removeAttr('required');​​​​​
	  // $('#obsCerGar').removeAttr('required');​​​​​
  
	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		  $("#tipoDocCerGar_label").val($("#tipoDocCerGar").find("option:selected").text());
		  $("#nivelServicioCerGar_label").val($("#nivelServicioCerGar").find("option:selected").text());
	  });
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudCerGar: "",
			  nomSolicitanteCerGar: {
				  lettersonly: true,
				  required: false
			  },
			  minCerGar: {
				  number:true,
				  required: false
			  },
			  custCodeUsuarioCerGar: {
				  required: false
			  },
			  tipoDocCerGar: {
				  required: false
			  },
			  documentoCerGar: {
				  required: false
			  },
			  nivelServicioCerGar: {
				  required: false
			  },
			  imeiCerGar: "required"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  
  //Formulario Cruce Min
  function validateCruceMin(){
	  $("#motivoCruceMin").hide();
	  $("#motivoCruceMin2").hide();
	  $("#motivoCruceMin3").hide();
	  $("#accionCrucMin").hide();
	  $("#checkCruceMin input").prop('checked', true);
	  $("#checkCruceMin input").val("1");
	  $("#checkCruceMin").hide();
	  $("#nivelServicioCruceMin").find("select").val("2");
  
	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		  $("#tipoDocCruceMin_label").val($("#tipoDocCruceMin").find("option:selected").text());
		  $("#nivelServicioCruceMin_label").val($("#nivelServicioCruceMin").find("option:selected").text());
	  });
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudCruceMin: "required",
			  nomSolicitanteCruceMin: "required lettersonly",
			  minCruceMin: "required number",
			  minPrepagoCrucMin: "required",
			  cedulaCruceMin: "number"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  
  //Formulario Cupón pago
  function validateSoliCuponPago(){
	  $("#motivoSoliCuponPago").hide();
	  $("#motivoSoliCuponPago2").hide();
	  $("#motivoSoliCuponPago3").hide();
	  $("#accionSoliCuponPago").hide();
	  $("#checkSoliCuponPago input").prop('checked', true);
	  $("#checkSoliCuponPago input").val("1");
	  $("#checkSoliCuponPago").hide();
	  $("#nivelSolicitudSoliCuponPago").find("select").val("2");
  
	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		  $("#tipoDocumentoSoliCuponPago_label").val($("#tipoDocumentoSoliCuponPago").find("option:selected").text());
		  $("#nivelSolicitudSoliCuponPago_label").val($("#nivelSolicitudSoliCuponPago").find("option:selected").text());
	  });
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudSoliCuponPago: "required",
			  nomSolicitanteSoliCuponPago: "required lettersonly",
			  tipoDocSoliCuponPago: "required",
			  nombreCentroPagoCodSoliCuponPago: "number",
			  valorPagoSoliCuponPago: "number",
			  fechaPagoSoliCuponPago: "required date"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
  //Formulario Desactivación paquete datos
  function validateAcPaqDatos(){
	  $("#motivoAcPaqDatos").hide();
	  $("#motivoAcPaqDatos2").hide();
	  $("#motivoAcPaqDatos3").hide();
	  $("#accionAcPaqDatos").hide();
	  $("#checkAcPaqDatos input").prop('checked', true);
	  $("#checkAcPaqDatos input").val("1");
	  $("#checkAcPaqDatos").hide();
	  $("#nivelServicioAcPaqDatos").find("select").val("2");
  
	  //agregar contenido a los _label
	  $("form[name='case1']").change(function(){
		  $("#tipoDocAcPaqDatos_label").val($("#tipoDocAcPaqDatos").find("option:selected").text());
		  $("#nivelServicioAcPaqDatos_label").val($("#nivelServicioAcPaqDatos").find("option:selected").text());
	  });
  
	  $("form[name='case1']").validate({
		  rules: {
			  fechaSolicitudAcPaqDatos: "required",
			  nomSolicitanteAcPaqDatos: "required lettersonly",
			  tramiteAcPaqDatos: "required",
			  paqueteDesactivarAcPaqDatos: "required",
			  cedulaAcPaqDatos: "number"
		  },
		  submitHandler: function(form) {
        disable_form_sms();
			  form.submit();
		  }
	  });
  }
	  //Formulario Desactivación Protección Móvil
	  function validateDesProMovil(){
		  $("#motivoDesProMovil").hide();
		  $("#motivoDesProMovil2").hide();
		  $("#motivoDesProMovil3").hide();
		  $("#accionDesProMovil").hide();
		  $("#checkDesProMovil input").prop('checked', true);
		  $("#checkDesProMovil input").val("1");
		  $("#checkDesProMovil").hide();
		  $("#nivelServicioDesProMovil").find("select").val("2");
  
		  //agregar contenido a los _label
		  $("form[name='case1']").change(function(){
			  $("#tipoDocDesProMovil_label").val($("#tipoDocDesProMovil").find("option:selected").text());
			  $("#nivelServicioDesProMovil_label").val($("#nivelServicioDesProMovil").find("option:selected").text());
		  });
  
		  $("form[name='case1']").validate({
			  rules: {
				  fechaSolicitudDesProMovil: "required",
				  nomSolicitanteDesProMovil: "required lettersonly",
				  nombreDesProMovil: "required",
				  equipoDesProMovil: "required",
				  cedulaDesProMovil: "number",
				  minDesProMovil: "number"
			  },
			  submitHandler: function(form) {
          disable_form_sms();
				  form.submit();
			  }
		  });
	  }
	  //Formulario Eliminacion de cuotas
	  function validateElimCuo(){
		  $("#motivoElimCuo").hide();
		  $("#motivoElimCuo2").hide();
		  $("#motivoElimCuo3").hide();
		  $("#accionElimCuo").hide();
		  $("#checkElimCuo input").prop('checked', true);
		  $("#checkElimCuo input").val("1");
		  $("#checkElimCuo").hide();
		  $("#nivelServicioElimCuo").find("select").val("2");
  
		  //agregar contenido a los _label
		  $("form[name='case1']").change(function(){
			  $("#tipoDocElimCuo_label").val($("#tipoDocElimCuo").find("option:selected").text());
			  $("#nivelServicioElimCuo_label").val($("#nivelServicioElimCuo").find("option:selected").text());
		  });
  
		  $("form[name='case1']").validate({
			  rules: {
				  fechaSolicitudElimCuo: "required",
				  nomSolicitanteElimCuo: "required lettersonly",
				  cedulaElimCuo: "number",
				  cantCuotasElimCuo: "required number",
				  valorCuoElimCuo: "required number",
				  valorTotalCuoElimCuo: "required number"
			  },
			  submitHandler: function(form) {
          disable_form_sms();
				  form.submit();
			  }
		  });
	  }
		  //Formulario Otros
		  function validateOtros(){
			  $("#motivoOtros").hide();
			  $("#motivoOtros2").hide();
			  $("#motivoOtros3").hide();
			  $("#accionOtros").hide();
			  $("#checkOtros input").prop('checked', true);
			  $("#checkOtros input").val("1");
			  $("#checkOtros").hide();
			  $("#nivelServicioOtros").find("select").val("2");
			  $("#tramiteOtros").find("select").selectize({
				  sortField: 'text'
			  });
			  $(".selectize-dropdown").css({"height":"auto"});
			  $(".selectize-control").css({"padding":"0"});
  
			  //agregar contenido a los _label
			  $("form[name='case1']").change(function(){
				  $("#nivelServicioOtros_label").val($("#nivelServicioOtros").find("option:selected").text());
				  $("#tipoDocOtros_label").val($("#tipoDocOtros").find("option:selected").text());
				  $("#tramiteOtros_label").val($("#tramiteOtros").find("option:selected").text());
			  });
  
			  $("form[name='case1']").validate({
				  rules: {
					  fechaSolicitudOtros: "required",
					  nomSolicitanteOtros: "required lettersonly",
					  custCodeUsuarioOtros: "required",
					  minClienteOtros: "required number",
					  tramiteOtros: "required"
				  },
				  submitHandler: function(form) {
            disable_form_sms();
					  form.submit();
				  }
			  });
		  }
  
		  function validateDesSerAdicionales(){
			  $("#motivoDesSerAdicionales").hide();
			  $("#motivoDesSerAdicionales2").hide();
			  $("#motivoDesSerAdicionales3").hide();
			  $("#accionDesSerAdicionales").hide();
			  $("#checkDesSerAdicionales input").prop('checked', true);
			  $("#checkDesSerAdicionales input").val("1");
			  $("#checkDesSerAdicionales").hide();
			  $("#nivelServicioDesSerAdicionales").find("select").val("2");
  
			  //agregar contenido a los _label
			  $("form[name='case1']").change(function(){
				  $("#tipoDocDesSerAdicionales_label").val($("#tipoDocDesSerAdicionales").find("option:selected").text());
				  $("#nivelServicioDesSerAdicionales_label").val($("#nivelServicioDesSerAdicionales").find("option:selected").text());
			  });
  
			  $("form[name='case1']").validate({
				  rules: {
					  fechaSolicitudDesSerAdicionales: "required",
					  nomSolicitanteDesSerAdicionales: "required lettersonly",
					  minDesSerAdicionales: "required number",
					  tramiteDesSerAdicionales: "required",
					  nomSolicitudDesSerAdicionales: "required",
					  cedulaDesSerAdicionales: "number",
					  nivelServicioDesSerAdicionales: "required"
				  },
				  submitHandler: function(form) {
            disable_form_sms();
					  form.submit();
				  }
			  });
		  }
	  //Formulario Desactivación Protección Móvil
	  function validateDesDupli(){
		  $("#motivoDesDupli").hide();
		  $("#motivoDesDupli2").hide();
		  $("#motivoDesDupli3").hide();
		  $("#accionDesDupli").hide();
		  $("#checkDesDupli input").prop('checked', true);
		  $("#checkDesDupli input").val("1");
		  $("#checkDesDupli").hide();
		  $("#tipoImeiDesDupli").val("IMEIDUPLICADO");
		  $("#nivelServicioDesDupli").find("select").val("2");
  
		  $("#custCodeDesDupli").inputmask("9.99999999");
  
		  //agregar contenido a los _label
		  $("form[name='case1']").change(function(){
			  $("#tipoDocDesDupli_label").val($("#tipoDocDesDupli").find("option:selected").text());
			  $("#nivelServicioDesDupli_label").val($("#nivelServicioDesDupli").find("option:selected").text());
		  });
  
		  // $("#tipoImeiDesDupli").mask('0.00000000');
  
		  $("form[name='case1']").validate({
			  rules: {
				  fechaSolicitudDesDupli: "required",
				  nomSolicitanteDesDupli: "required lettersonly",
				  tipoDocDesDupli: "required",
				  ciudadResidenciaDesDupli: "required",
				  tipoImeiDesDupli: "required",
				  tramiteDesDupli: "required",
				  cedulaDesDupli: "required",
			  },
			  submitHandler: function(form) {
          disable_form_sms();
				  form.submit();
			  }
		  });
	  }
  
	  function validateActAmigosFamilia(){
		  $("#checkActAmigosFamilia input").prop('checked', true);
		  $("#checkActAmigosFamilia input").val("1");
		  $("#checkActAmigosFamilia").hide();
		  $("#nivelServicioActAmigosFamilia").find("select").val("2");
  
		  //agregar contenido a los _label
		  $("form[name='case1']").change(function(){
			  $("#tipoDocActAmigosFamilia_label").val($("#tipoDocActAmigosFamilia").find("option:selected").text());
			  $("#nivelServicioActAmigosFamilia_label").val($("#nivelServicioActAmigosFamilia").find("option:selected").text());
			  $("#cambioServicioActAmigosFamilia_label").val($("#cambioServicioActAmigosFamilia").find("option:selected").text());
		  });
  
		  $("form[name='case1']").validate({
			  rules: {
				  fechaSolicitudActAmigosFamilia: "required",
				  nombreTitularActAmigosFamilia: "required lettersonly",
				  minActAmigosFamilia: "number",
				  custCodeActAmigosFamilia: "number",
				  cedulaActAmigosFamilia: "number",
				  tipoDocActAmigosFamilia: "required"
			  },
			  submitHandler: function(form) {
          disable_form_sms();
				  form.submit();
			  }
		  });
	  }
  
  
  function disable_form_sms(){
        $('#loading_wait').css('display','inline'); 
        $('#enviar_frm').attr('disabled','disabled');
  }
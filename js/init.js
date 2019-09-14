$(window).load(function () {
	$('.page-loader-wrapper').fadeOut(500);
});
$(document).ready(function(){
	$('#agregarCaso').tooltip();
	$('#tablaCasos').DataTable({
	   "language": {
		  "url": "//cdn.datatables.net/plug-ins/1.10.15/i18n/Spanish.json"
	   },
	    "scrollX": true,
	    "dom": "lftip",
	    "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "Todos"]]
	} );

	$("#btnNewCase").click( function (e) {
		e.preventDefault();
		swal({
			title: '¿Desea crear una nueva cuenta?',
			text: "No podras deshacer esta accion",
			type: 'warning',
			showCancelButton: true,
			confirmButtonText: 'Crear!',
			cancelButtonText: 'Cancelar!',
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
		}).then((result) => {
			if (result.value) {
				$("#newCaseForm").submit();
			}
		})
	});
});

"use strict"

// Formularios de las páginas index.html  regUsuarios.html  regCategorias.html  regProductos.html
var form1 = document.getElementById("form1")
var form2 = document.getElementById("form2")
var form3 = document.getElementById("form3")
var form4 = document.getElementById("form4")

// Al momento de cargarse la página, se realiza la asignación de los eventos correspondientes a los formulario
document.addEventListener("DOMContentLoaded", function() {
	if (form1 != null) { //Solo se agrega el evento si
		form1.addEventListener('submit', validarFormulario1);
	}
	if (form2 != null) {
		form2.addEventListener('submit', validarFormulario2);
	}
	if (form3 != null) {
		form3.addEventListener('submit', validarFormulario3);
	}
	if (form4 != null) {
		form4.addEventListener('submit', validarFormulario4);
	}
});

// Validar el formulario de login
function validarFormulario1(e) {
	e.preventDefault();
	var user = document.getElementById('user').value;
	var pass = document.getElementById('pass').value;
	let validation = true;

	if(user.length == 0 || user != 'admin') {
		document.getElementById('user').classList.add('is-invalid');
	  	validation = false
	}

	if (pass.length == 0 || pass != 'admin') {
		document.getElementById('pass').classList.add('is-invalid');
		validation = false
	}

	if (!validation) {
		$('#modal-danger').modal('show');
		return;
	}

	this.submit();
}

// Validar el formulario de usuario
function validarFormulario2(e) {
	// Se previene la acción por defecto del evento
	e.preventDefault();

	// Se obtiene el objeto que representa a los campos de entrada
	var user = document.getElementById('user');
	var name = document.getElementById('name');
	var last = document.getElementById('last');
	var email = document.getElementById('email');
	var pass = document.getElementById('pass');
	var cpass = document.getElementById('Cpass');

	// Se quitan las clases de es válido
	user.classList.remove('is-invalid');
	name.classList.remove('is-invalid');
	last.classList.remove('is-invalid');
	email.classList.remove('is-invalid');
	pass.classList.remove('is-invalid');
	cpass.classList.remove('is-invalid');

	// Bandera de validación y descripción
	let validation = true;
	let desc = ''

	// Validación de cada campo: si está vacio o no o si corresponde la contraseña o no
	if(user.value.length == 0) {
		user.classList.add('is-invalid');
		desc = desc + '<p>El campo usuario está vació</p>'
	  	validation = false
	}

	if (name.value.length == 0) {
		name.classList.add('is-invalid');
		desc = desc + '<p>El campo nombre está vació</p>'
		validation = false
	}

	if (last.value.length == 0) {
		last.classList.add('is-invalid');
		desc = desc + '<p>El campo apellido está vació</p>'
		validation = false
	}

	if (email.value.length == 0) {
		email.classList.add('is-invalid');
		desc = desc + '<p>El campo email tiene un valor incorrecto</p>'
		console.log(validateEmail(email))
		validation = false
	}

	if (pass.value.length == 0 || cpass.value.length == 0 || pass.value != cpass.value) {
		pass.classList.add('is-invalid');
		cpass.classList.add('is-invalid');
		desc = desc + '<p>El campo contraseña está vació o no coincide con la confirmación</p>'
		validation = false
	}

	// Si resulta que la bandera es falsa, se muestra el modal y se  coloca la info de los campos vacios
	if (!validation) {
		$('#modal-danger').modal('show');
		document.getElementById("desc1").innerHTML = desc
		return;
	}

	// Si la validación es correcta se continua con el flujo del programa y se muestra un modal de éxito
	$('#modal-success').modal('show');
	desc = '<p>Usuario: ' + user.value + '</p>' + '<p>Nombre: ' + name.value + '</p>' + '<p>Apellido: ' + last.value + '</p>' + '<p>Correo: ' + email.value + '</p>'
	document.getElementById("desc2").innerHTML = desc
}

// Validar el formulario de productos
function validarFormulario3(e){
	// Se previene la acción por defecto del evento
	e.preventDefault();
	// Se obtiene el objeto que representa a los campos de entrada
	var clave = document.getElementById('clave');
	var nameP = document.getElementById('nameP');
	var categoria = document.getElementById('categoria');
	var precioV = document.getElementById('precioV');
	var precioC = document.getElementById('precioC');

	// Se quitan las clases de es válido
	clave.classList.remove('is-invalid');
	nameP.classList.remove('is-invalid');
	categoria.classList.remove('is-invalid');
	precioV.classList.remove('is-invalid');
	precioC.classList.remove('is-invalid');

	// Bandera de validación y descripción
	let validation = true;
	let desc = ''

	// Validación de cada campo: si está vacio o no
	if(clave.value.length == 0) {
		clave.classList.add('is-invalid');
		desc = desc + '<p>El campo clave está vació</p>'
	  	validation = false
	}

	if (nameP.value.length == 0) {
		nameP.classList.add('is-invalid');
		desc = desc + '<p>El campo nombre del producto está vació</p>'
		validation = false
	}

	if (categoria.value == null) {
		categoria.classList.add('is-invalid');
		desc = desc + '<p>El campo apellido está vació</p>'
		validation = false
	}

	if (precioV.value == 0 || precioV.value == null) {
		precioV.classList.add('is-invalid');
		desc = desc + '<p>El campo precio de venta tiene una cantidad insuficiente</p>'
		validation = false
	}

	if (precioC.value == 0 || precioC.value == null) {
		precioC.classList.add('is-invalid');
		desc = desc + '<p>El campo precio de venta tiene una cantidad insuficiente</p>'
		validation = false
	}

	// Si resulta que la bandera es falsa, se muestra el modal y se  coloca la info de los campos vacios
	if (!validation) {
		$('#modal-danger').modal('show');
		document.getElementById("desc1").innerHTML = desc
		return;
	}

	// Si la validación es correcta se continua con el flujo del programa y se muestra un modal de éxito
	// $('#modal-success').modal('show');
	desc = '<p>Se agregó con éxito el producto</p>'
	document.getElementById("desc2").innerHTML = desc

	this.submit()
}

// Validar el formulario de categoria de productos
function validarFormulario4(e){
	e.preventDefault();
	var clave = document.getElementById('clave');
	var catName = document.getElementById('catName');
	var prior = document.getElementById('prior');

	clave.classList.remove('is-invalid');
	catName.classList.remove('is-invalid');
	prior.classList.remove('is-invalid');

	let validation = true;
	let desc = ''

	// Validación de cada campo: si está vacio o no
	if(clave.value.length == 0) {
		clave.classList.add('is-invalid');
		desc = desc + '<p>El campo clave de categoria está vacio</p>'
	  	validation = false
	}

	if (catName.value.length == 0) {
		catName.classList.add('is-invalid');
		desc = desc + '<p>El campo nombre de categoria está vacio</p>'
		validation = false
	}

	// Si resulta que la bandera es falsa, se muestra el modal y se  coloca la info de los campos vacios
	if (!validation) {
		$('#modal-danger').modal('show');
		document.getElementById("desc1").innerHTML = desc
		return;
	}

	// Si la validación es correcta se continua con el flujo del programa y se muestra un modal de éxito
	$('#modal-success').modal('show');
	desc = '<p>Clave: ' + clave.value + '</p>' + '<p>Nombre: ' + catName.value + '</p>'
	document.getElementById("desc2").innerHTML = desc
}
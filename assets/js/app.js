
 $(document).ready(function(){
 	/*genito
  * funcion de carrusel en seccion de pelicula
  * botones laterales de seccion pelicula
  */

 });

$(document).ready(function(){
	$("#film_logo").click(function(){
	$("#indi_movies").toggle();
	});

	$('#Carousel').carousel({
        interval: 3000
    })
});

/*modales*/
$('#myModal2').on('shown.bs.modal', function () {
    $('#myInput').focus()
});

/*registro con firebase*/
function registrar() {
    var usuario = document.getElementById("registroName").value;
    var nacimiento = document.getElementById("registroData").value;
    var email = document.getElementById("registroEmail").value;
    var password = document.getElementById("registroPassword").value;

    firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
    });
    
}
function ingreso() {
    var email2 = document.getElementById("ingresoEmail").value;
    var password2 = document.getElementById("ingresoPassword").value;

    firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        console.log(errorCode);
        console.log(errorMessage);
        alert("Usuario no Registrado, Registrate!")
    });

  

}
function observador() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;
            // ...
        } else {
            // User is signed out.
            // ...
        }
    });
}
observador();

$("#botonPremiun").click(function () {
    $("#caja-texto").html("PREMIUN");
});
$("#botonFree").click(function () {
    $("#caja-texto").html("FREE");
});


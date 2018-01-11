$(document).ready(function(){
 	/*genito
  * funcion de carrusel en seccion de pelicula
  * botones laterales de seccion pelicula
  */
  $(".start-free, .movie-details, .user-section, .setting-section, .indi_movies, .hover-film, .logo-hover").hide();
  $(".start-premium").show();

  $(".user").click(function(){
    $(".start-free, .movie-details, .start-premium, .setting-section, .indi_movies, .hover-film").hide();
    $(".user-section").show();
  });

  $(".logo").click(function(){
    $(".start-free, .movie-details, .setting-section, .indi_movies, .hover-film, .user-section").hide();
    $(".start-premium").show();
  });

  $(".settings-btn").click(function(){
    $(".start-free, .movie-details, .start-premium, .indi_movies, .hover-film, .user-section").hide();
    $(".setting-section").show();
  });

 });

$(document).ready(function(){
	$("#film_logo").click(function(){
	$("#indi_movies").toggle();
 $(".start-premium, .start-free, .movie-details, .user-section").hide();
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

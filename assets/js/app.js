$(document).ready(function(){
 	/*genito
  * funcion de carrusel en seccion de pelicula
  * botones laterales de seccion pelicula

  $(".start-free, .movie-details, .user-section, .setting-section, .indi_movies, .hover-film, .logo-hover, .start-premium, .navbar").hide();
  $(".login").show(); 
  */ 
  // Initialize Firebase
    
    
   

    $(".start-free, .movie-details, .user-section, .setting-section, .indi_movies, .hover-film, .logo-hover, .start-premium, .login, .list-section, .navbar-movie").hide();

    $(".free-button").click(function () {
        $(".start-premiun, .login, .setting-section").hide();
        $(".start-free, .navbar-movie").show();
    });

    $(".premiun-button").click(function () {
        $(".start-free, .login, .setting-section").hide();
        $(".start-premiun, .navbar-movie").show();
    });

   

  $(".user").click(function(){
    $(".start-free, .movie-details, .start-premium, .setting-section, .indi_movies, .hover-film, .login, .list-section").hide();
    $(".user-section").show();
  });

  $(".logo").click(function(){
    $(".start-free, .movie-details, .setting-section, .indi_movies, .hover-film, .user-section, .login, .list-section").hide();
    $(".start-premium").show();
  });

  $(".settings-btn").click(function(){
    $(".start-free, .movie-details, .start-premium, .indi_movies, .hover-film, .user-section, .login .list-section").hide();
    $(".setting-section").show();
  });

  $(".img-poster").click(function(){
   $(".start-free, .login, .user-section, .setting-section, .indi_movies, .hover-film, .logo-hover, .start-premium, .list-section").hide();
  $(".movie-details").show();
  });

  $(".list-btn").click(function(){
   $(".start-free, .movie-details, .setting-section, .indi_movies, .hover-film, .logo-hover, .start-premium, .login, .user-section").hide();
   $(".list-section").show();
  });


 });

$(document).ready(function(){
	$("#film_logo").click(function(){
	$("#indi_movies").toggle();
 $(".start-premium, .start-free, .movie-details, .user-section, .login").hide();
	});

	$('#Carousel').carousel({
        interval: 3000
    })

});
//función modal film
 var config = {
    apiKey: "AIzaSyAQ5Af7KRHHFLVxaKv5bGjlCI23eqsJtao",
    authDomain: "film-c0a36.firebaseapp.com",
    databaseURL: "https://film-c0a36.firebaseio.com",
    projectId: "film-c0a36",
    storageBucket: "film-c0a36.appspot.com",
    messagingSenderId: "608674654580"
  };
  firebase.initializeApp(config);
    var TablaDeBaseDatos = firebase.database().ref('films');
    $('#upload-file-selector').change(function(){
      if(this.files && this.files[0]){
        var archivo = new FileReader();
        archivo.onload = function(e){
          urlLarge = e.target.result;
          $('#img').attr('src', urlLarge);
        };
        archivo.readAsDataURL(this.files[0]);
      }
    })
  $(document).ready(function(){
    $("#img").hide();
    $("#save_btn").click(function(){
        $("#img").show();
        $("#myModal .close").click()  
     })
  })


/*modales*/
$('#myModal2').on('shown.bs.modal', function () {
    $('#myInput').focus()
});
$('#modalPago').on('shown.bs.modal', function () {
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
    var email2 = document.getElementById("registroEmail").value;
    var password2 = document.getElementById("registroPassword").value;

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
/*efecto de boton */
$("#botonPremiun").click(function () {
    $("#caja-texto").html("PREMIUN");
});
$("#botonFree").click(function () {
    $("#caja-texto").html("FREE");
});

/*splash*/
$(function () {
    setTimeout(function () {
        $(".login").hide();

        $('#splash').fadeOut(500);

        $('.splash').fadeOut(500);
        $(".login").show();
    }, 2000);

});



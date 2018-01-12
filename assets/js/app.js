$(document).ready(function(){
  /*genito
  * funcion de carrusel en seccion de pelicula
  * botones laterales de seccion pelicula
  */

   /*splash INSOMNIA*/
   $(function () {
       setTimeout(function () {
           $(".inicio").hide();
           $('#splash').fadeOut(500);
           $(".inicio").show();
       }, 2000);
   });


// Initialize Firebase
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
        $("#modal_film .close").click()  
     })
  })

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
    $(".start-free, .movie-details, .start-premium, .setting-section, .indi_movies, .hover-film, .login, .list-section , #splash").hide();
    $(".user-section").show();
  });

  $(".logo").click(function(){
    $(".start-free, .movie-details, .setting-section, .indi_movies, .hover-film, .user-section, .login, .list-section, #splash").hide();
    $(".start-premium").show();
  });

  $(".acceder1").click(function(){
    $(".start-free, .movie-details, .setting-section, .indi_movies, .hover-film, .user-section, .login, .list-section, #splash").hide();
    $(".start-premium").show();
  });
  $(".acceder2").click(function(){
    $(".start-free, .movie-details, .setting-section, .indi_movies, .hover-film, .user-section, .login, .list-section, #splash, .film_logo").hide();
    $(".start-free").show();
  });

  $(".settings-btn").click(function(){
    $(".start-free, .movie-details, .start-premium, .indi_movies, .hover-film, .user-section, .login .list-section, #splash").hide();
    $(".setting-section").show();
  });

  $(".img-poster-2").click(function(){
   $(".start-free, .login, .user-section, .setting-section, .indi_movies, .hover-film, .logo-hover, .start-premium, .list-section, #splash").hide();
  $(".movie-details").show();
  });

  $(".list-btn").click(function(){
   $(".start-free, .movie-details, .setting-section, .indi_movies, .hover-film, .logo-hover, .start-premium, .login, .user-section, #splash").hide();
   $(".list-section").show();
  });

 });

$(document).ready(function(){
 $("#film_logo").click(function(){
 $("#indi_movies").toggle();
 $(".start-premium, .start-free, .movie-details, .user-section, .login , #splash").hide();
 });

 $('#Carousel').carousel({
        interval: 3000
    })

  $('#Carousel-1').carousel({
        interval: 2500
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
       /* alert("Usuario no Registrado, Registrate!")*/
    });
}

/*efecto de boton */
$("#botonPremiun").click(function () {
    $("#caja-texto").html("PREMIUN");
});
$("#botonFree").click(function () {
    $("#caja-texto").html("FREE");
});


//API
$(document).ready(() => {
  $('#searchForm').on('submit', (e) => {
    let searchText = $('#searchText').val();
    getMovies(searchText);
    e.preventDefault();
  });
});

function getMovies(searchText){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=fa155f635119344d33fcb84fb807649b&query='+searchText)
        .then((response) => {
            console.log(response);
            let movies = response.data.results;
            let output = '';
            $.each(movies, (index, movie) =>{
                output += `
                    <div class="col-md-3">
                        <div class="well text-center">
                            <img class = "img-responsive" src="http://image.tmdb.org/t/p/w185/${movie.poster_path}">
                            <h5>${movie.title}</h5>
                        </div>
                    </div>
            `;
            });
        
        $('#movies').html(output);
        })
        .catch((err) =>{
           console.log(err);
        });
}﻿
function movieSelected(id){
  sessionStorage.setItem('movieId', id);
  window.location = 'movie.html';
  return false;
}

function getMovie(){
  let movieId = sessionStorage.getItem('movieId');
  axios.get('http://www.omdbapi.com?i='+movieId)
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output =`
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Genre:</strong> ${movie.Genre}</li>
              <li class="list-group-item"><strong>Released:</strong> ${movie.Released}</li>
              <li class="list-group-item"><strong>Rated:</strong> ${movie.Rated}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
            <hr>
            <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
            <a href="index.html" class="btn btn-default">Go Back To Search</a>
          </div>
        </div>
      `;
      $(".default-movies").hide();

      $('#movie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

    function redirect()
    {
    var url = "http://www.imdb.com/";
    window.location(url);
    }
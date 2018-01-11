 $(document).ready(function(){
 	/*genito
  * funcion de carrusel en seccion de pelicula
  * botones laterales de seccion pelicula
  */
 	$(".img").hide();
  $(".img").first().show();  
   
 });



 /*
   var images = [];
  $('.img').each(function(){
       images.push($(this));    
   });

   var imgcount = images.length;
   $(".img").hide();
   $(".img").first().show();
   var currentItem = 0;

   $('.right').click(function(){
           $("img").hide();
           currentItem++;
           images[currentItem%imgcount].show();        
   });


   $('.left').click(function(){
           $("img").hide();
          currentItem--;
          if(currentItem < 0)
              currentItem = imgcount-1;
          images[currentItem%imgcount].show();
   });
 */

$(document).ready(function(){
	$("#film_logo").click(function(){
	$("#indi_movies").toggle();
	});

	$('#Carousel').carousel({
        interval: 3000
    })
});

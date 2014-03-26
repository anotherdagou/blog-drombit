;(function ($) {
	// Fix de imagenes dentro de una etiqueta p
	$("img").parent("p").css({ padding: "0px", marginBottom: "0px", marginLeft: "-24px", marginRight: "-24px" });

	//create a TimelineLite instance
    var menuActive = new TimelineLite({paused:true});

    // Animación del menu activo
    menuActive.to($(".menu"), .15, {display:"table", height:"100%"})
    .to($(".menu ul"), .5, {opacity:1, display:"table-cell", bottom:"0px", ease:Back.easeOut})
    .to($(".menu #close-menu"), .5, {opacity:1, right:"48px", ease:Back.easeOut});
    //.to($(".menu ul"), .15, {bottom:"0px"}, "-=.15", ease:SlowMo.ease);
    /*.staggerFromTo(menuArray, .15, {scale:0, opacity:0}, {display:"block", scale:1, opacity:1}, .15);*/

    $('#category').on("click", function(){
    	menuActive.play();
    });
    $('body').on("click", "#close-menu", function(){
    	menuActive.reverse();
    });
 
}(jQuery || {}));

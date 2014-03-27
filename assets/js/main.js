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

    // Fix para los titulos de las secciones en el header
    var category = $("#categoryName").html();
    if (category == "DISENO") {
        $("#categoryName").html("DISEÑO");
    }else if (category == "OPINION"){
        $("#categoryName").html("OPINIÓN");
    };

    // Carga de los botones para compartir
    var share = new Share(".social-share", {
      ui: {
        flyout: "top center",
        button_text: "Compartir Articulo",
      },
      networks: {
        twitter: {
          enabled: true
        },
        facebook: {
            app_id: "787359484627569"
        }
      }
    });
 
}(jQuery || {}));

;(function ($) {

	//create a TimelineLite instance
    var menuActive = new TimelineLite({paused:true});

    // Fix para los titulos de las secciones en el header
    var category = $("#categoryName").html();
    if (category == "DISENO") {
        $("#categoryName").html("DISEÑO");
    }else if (category == "OPINION"){
        $("#categoryName").html("OPINIÓN");
    };

    // Menú Móvil
    $('.js-menu-mobile').on('click', function(){
        $('.site-nav__menu .menu').toggleClass('menu--mobile');
    });
 
}(jQuery || {}));

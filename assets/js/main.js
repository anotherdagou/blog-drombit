;(function ($) {


    // Fix para los titulos de las secciones en el header
    var category = $("#categoryName").html();
    if (category === "DISENO") {
        $("#categoryName").html("DISEÑO");
    }else if (category === "OPINION"){
        $("#categoryName").html("OPINIÓN");
    } 

    // Menú Móvil
    $('.js-menu-mobile').on('click', function(){
        $('.site-nav__menu .menu').toggleClass('menu--mobile');
    });

    // Generar enlaces en nueva pestaña para dominios externos
    // 1. Selecciona todos los enlaces del articulo.
    // 2. Encuentra los enlaces que enlazan a artículos del blog.
    //    Estos enlaces no serán abiertos en una nueva pestaña.
    // 3. El método search del punto dos devuelve un -1 con enlaces que no cumplan
    //    con el parámetro de búsqueda establecido. Estos enlaces serán abiertos en
    //    una nueva pestaña.
    var articleLinks = $('.article__content a'); /*[1]*/
    
    articleLinks.each(function(){
        var getDomain = $(this).attr('href').search('blog.drombit.com'); /*[2]*/
        var link = $(this);

        if (getDomain < 1) { /*[3]*/
            link.attr('target','_blank');
        }
    }); 
}(jQuery || {}));

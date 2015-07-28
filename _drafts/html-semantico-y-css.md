---
layout: post
title: ¿Afectan al SEO las clases CSS en el HTML?
description: Analizando la mejor forma de escribir HTML Semántico y como CSS puede interferir en este proceso.
author: Diego
date: 2015-07-28T18:28:00.000Z
comments: true
categories:
  - desarrollo
tags:
  - HTML
  - CSS
---

Llevo escribiendo **CSS** por un buen tiempo, conforme uno va escribiendo CSS o cualquier otro lenguaje, uno empieza a interesarse en las mejores practicas que permitan que tu c&oacute;digo sea m&aacute;s modular, m&aacute;s escalable, m&aacute;s semantico, etc.

Si tu intenci&oacute;n es desarrollar sitios web que sean facilmente indexables por los buscadores y permitan explotar todas sus caracteristicas debes de cuidar que el c&oacute;digo HTML que generas sea semantico. Valiendote de las diferentes etiquetas y propiedades que HTML 5 nos ofrece.

A la pregunta de: si &iquest;Afectan al SEO las clases CSS en el HTML? La respuesta rapida es no. Para los b&uacute;scadores el nombre de las clases no afecta en como tu sitio web es leido por un buscador.

Por mucho tiempo he evitado utilizar Frameworks como Bootstrap devido a lo poco semantico que para mi resultan las clases CSS que se utilizan para generar el layout de un sitio web. En sitios construidos con Bootstrap es comun encontrarse c&oacute;digo como este:

```
<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1">
```

Para evitar ese problema y tener un c&oacute;digo m&aacute;s semantico y sencillo de entender utilizo [Neat](http://neat.bourbon.io/), el cual b&aacute;sicamente te permite utilizar menos clases de lado del HTML y manejar toda la logica del layout en el propio CSS. Cabe destacar que al d&iacute;a de hoy Bootstrap ya cuenta con esta caracteristica.

Este es un ejemplo de un layout generado con Neat:

<!--|%%|%7B%25%20highlight%20HTML%20linenos%25%7D|%%|--> // HTML
<section><aside class="sidebar">What is it about?</aside><article class="main-content">Neat is an open source semantic grid framework built on top of Sass and Bourbon&hellip;</article></section>

// CSS .container { @include outer-container;

.sidebar { @include span-columns(6); } .main-content { @include span-columns(6); }

@include media(min-width: 768px) { .sidebar { @include span-columns(3); } .main-content { @include span-columns(9); } } } <!--|%%|%7B%25%20endhighlight%20%25%7D|%%|-->

La [W3C](http://www.w3c.es/)(El Consorcio World Wide Web) recomienda como buena practica, [utilizar las clases teniendo en cuenta la semantica](http://www.w3.org/QA/Tips/goodclassnames). Si bien estamos generando contenido m&aacute;s facil de leer e interpretar, esta forma de utilizar las clases a los buscadores no les dicen nada.

Para poder escribir HTML m&aacute;s sem&aacute;ntico que le permita a los buscadores conocer mejor la estructura y contenido de nuestro sitio, debemos de utilizar algunos estandares como los [Microformatos](http://microformats.org/) o [schema.org](http://schema.org/)(RDFa, Microdata y JSON-LD). Ambas iniciativas son compatibles con los buscadores m&aacute;s populares: Google, Bing y Yahoo.

## Microformatos

Como mencione al principio de esta entrada, los nombres de las clasess que escribimos en nuestro c&oacute;digo HTML no afectan en como un buscadador lee nuestro sitio web, sin embargo hay un exepci&oacute;n y esas son los Microformatos. Los microformatos son una serie de patrones que permiten estructurar el c&oacute;digo HTML el cual puede ser leido e interpretado por los buscadores. Todo esto a traves de clases CSS. Aqui podemos ver un ejemplo b&aacute;sico de un uso. <!--|%%|%7B%25%20highlight%20HTML%20linenos%25%7D|%%|-->

 
<div class="h-card">![photo of Mitchell](https://webfwd.org/content/about-experts/300.mitchellbaker/mentor_mbaker.jpg) &lt;a class=&quot;p-name u-url&quot; href=&quot;[http://blog.lizardwrangler.com/](http://blog.lizardwrangler.com/)&quot;</div>

 

```
>Mitchell Baker</a>
```

(&lt;a class=&quot;u-url&quot; href=&quot;[https://twitter.com/MitchellBaker](https://twitter.com/MitchellBaker)&quot;

```
>@MitchellBaker</a>)
```

<span class="p-org">Mozilla Foundation</span>

Mitchell is responsible for setting the direction and scope of the Mozilla Foundation and its activities.

<span class="p-category">Strategy</span> <span class="p-category">Leadership</span>
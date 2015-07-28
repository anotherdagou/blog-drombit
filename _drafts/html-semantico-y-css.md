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

{% highlight HTML linenos%}
// HTML
<section class"container">
  <aside class="sidebar">What is it about?</aside>
  <article class="main-content">Neat is an open source semantic grid framework built on top of Sass and Bourbon…</article>
</section>

// CSS
.container {
  @include outer-container;

  .sidebar { @include span-columns(6); }
  .main-content { @include span-columns(6); }

  @include media(min-width: 768px) {
    .sidebar { @include span-columns(3); }
    .main-content { @include span-columns(9); }
  }
}
{% endhighlight %} 

La [W3C](http://www.w3c.es/)(El Consorcio World Wide Web) recomienda como buena practica, [utilizar las clases teniendo en cuenta la semantica](http://www.w3.org/QA/Tips/goodclassnames). Si bien estamos generando contenido m&aacute;s facil de leer e interpretar, esta forma de utilizar las clases a los buscadores no les dicen nada.

Para poder escribir HTML m&aacute;s sem&aacute;ntico que le permita a los buscadores conocer mejor la estructura y contenido de nuestro sitio, debemos de utilizar algunos estandares como los [Microformatos](http://microformats.org/) o [schema.org](http://schema.org/)(RDFa, Microdata y JSON-LD). Ambas iniciativas son compatibles con los buscadores m&aacute;s populares: Google, Bing y Yahoo.

## Microformatos

Como mencione al principio de esta entrada, los nombres de las clasess que escribimos en nuestro c&oacute;digo HTML no afectan en como un buscadador lee nuestro sitio web, sin embargo hay un exepci&oacute;n y esas son los Microformatos. Los microformatos son una serie de patrones que permiten estructurar el c&oacute;digo HTML el cual puede ser leido e interpretado por los buscadores. Todo esto a traves de clases CSS. Aqui podemos ver un ejemplo b&aacute;sico de un uso. 

{% highlight HTML linenos%}
<div class="h-card">
  <img class="u-photo" alt="photo of Mitchell"
       src="https://webfwd.org/content/about-experts/300.mitchellbaker/mentor_mbaker.jpg"/>
  <a class="p-name u-url"
     href="http://blog.lizardwrangler.com/" 
    >Mitchell Baker</a>
  <span class="p-category">Profesor</span>
</div>
{% endhighlight %} 

Los microformatos establecen una serie de clases que permiten darle contexto a la información que estamos generando. El ejemplo de arriba presenta la información de una persona. las clases: ``` h-card, p-name, u-url, p-category``` son clases que ayudan a los buscadores a entender la información que se genera. Las diferentes clases y caracterisiticas particulares de los microformatos no seran tratados en esta entrada.

## Schema.org
Al igual que los microformatos, schema.org es una comunidad que busca gener estandares para compartir información la cual puede ser leida e interpretada por los buscadores, a diferencia de los microformatos que utilizan las Clases CSS, schemas.org utiliza otros formatos como: RDFa, Microdata y JSON-LD. Un ejemplo parecido al ejemplo previamente escrito utilizando por ejemplo Microdata seria.

{% highlight HTML linenos%}
<div itemscope itemtype="http://schema.org/Person">
    <img src="https://webfwd.org/content/about-experts/300.mitchellbaker/mentor_mbaker.jpg" itemprop="image" alt="photo of Mitchell"/>
    <span itemprop="name">Mitchell</span>
    <a href="http://blog.lizardwrangler.com/" itemprop="url">Mitchell Baker</a>
    <span itemprop="jobTitle">Profesor</span>
</div>
{% endhighlight %}

Schema.org parece ser un estandar más aceptado hoy en día, Google por ejemplo tiene una [sección espesifica](https://developers.google.com/structured-data/) para sacarle el mayor provecho a los estandares propuestos por la schema.org. 

Ambas propuestas merecen un articulo más detallado, pero sus alcances son muy interesantes, sobre todo si lo que se desea es generar contenido que sea amigable para los buscadores. Sin profundizar en el tema los patrones que proponen los microformatos me gusta ya que permite combinar la generación de CSS más semantico y HTML más facil de leer para los desarroladores y los buscadores. Los diferentes formatos propuestos por Schema.org igual son interesantes, sobre todo que pueden ser utilizados para diferentes tipos de contenidos, y el hecho de que Google lo ocupe con mayor interes es algo que para muchos resulta muy tentador. 




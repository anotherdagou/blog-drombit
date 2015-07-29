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

Llevo escribiendo **CSS** por varios años, conforme uno va escribiendo CSS o cualquier otro lenguaje, uno empieza a interesarse en conocer las mejores practicas, que permitan que tu código sea más modular, más escalable, más fácil de leer, más semántico, etc.

Si tu intención es desarrollar sitios web que permitan a los buscadores leer e interpretar el contenido de tu sitio, una de las mejores practicas es cuidar que el código HTML que generas sea semántico; utilizando  las diferentes herramientas que tenemos a la mano: Etiquetas y propiedades de HTML5, Microformatos, Microdatos, RDFa, JSON-LD.

A la pregunta de: **¿Afectan al SEO las clases CSS en el HTML?** En primera instancia la respuesta es no. Para los buscadores el nombre de las clases no afecta en como tu sitio web es leído e interpretado por un buscador.

Por mucho tiempo, he evitado utilizar Frameworks como Bootstrap, debido a lo poco semántico que para mi resultan las clases CSS que se utilizan para generar el layout de un sitio web. En sitios construidos con Bootstrap es común encontrarse código como este:

```
<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1">
```

Para evitar este problema y tener un código más semántico y sencillo de entender utilizo [Neat](http://neat.bourbon.io/), el cual básicamente te permite usar menos clases de lado del HTML y manejar toda la lógica del layout en el propio CSS. Cabe destacar que al día de hoy Bootstrap o Foundation ya cuentan con esta característica.

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


La [W3C](http://www.w3c.es/)(El Consorcio World Wide Web) recomienda como buena practica, [utilizar las clases teniendo en cuenta la semántica](http://www.w3.org/QA/Tips/goodclassnames). Si bien estamos generando contenido más fácil de leer e interpretar, esta forma de utilizar las clases, a los buscadores no les dicen nada.

Para poder escribir HTML más semántico, que le permita a los buscadores conocer mejor la estructura y contenido de nuestro sitio, debemos de utilizar algunos estándares como los [Microformatos](http://microformats.org/) o [schema.org](http://schema.org/)(RDFa, Microdata y JSON-LD). Ambas iniciativas son compatibles con los buscadores más populares: Google, Yahoo y Bing.

## Microformatos

Como mencione al principio de esta entrada, los nombres de las clases que escribimos en nuestro código HTML no afectan en como un buscador lee nuestro sitio web, sin embargo, hay un excepción y esas son los Microformatos. Los Microformatos son una serie de patrones que permiten estructurar el código HTML para ser leído e interpretado por los buscadores. Todo esto a través de clases CSS. Aquí podemos ver un ejemplo básico de un uso.

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

Los microformatos establecen una serie de clases que permiten darle contexto a la información que estamos generando. El ejemplo de arriba presenta la información de una persona. las clases: ``` h-card, p-name, u-url, p-category``` son clases que ayudan a los buscadores a entender la información que se genera. Las diferentes clases y características particulares de los Microformatos no serán tratados en esta entrada.

## Schema.org
Al igual que los ;icroformatos, schema.org es una comunidad que busca generar estándares para compartir información la cual puede ser leída e interpretada por los buscadores, a diferencia de los ;icroformatos que utilizan las Clases CSS, schemas.org utiliza otros formatos como: RDFa, Microdata y JSON-LD. Un ejemplo parecido al ejemplo previamente escrito utilizando por ejemplo Microdata seria.

{% highlight HTML linenos%}

<div itemscope itemtype="http://schema.org/Person">
    <img src="https://webfwd.org/content/about-experts/300.mitchellbaker/mentor_mbaker.jpg" itemprop="image" alt="photo of Mitchell"/>
    <span itemprop="name">Mitchell</span>
    <a href="http://blog.lizardwrangler.com/" itemprop="url">Mitchell Baker</a>
    <span itemprop="jobTitle">Profesor</span>
</div>

{% endhighlight %}

Schema.org parece ser un estándar más aceptado hoy en día, Google por ejemplo tiene una [sección especifica](https://developers.google.com/structured-data/) para sacarle el mayor provecho a los estándares propuestos por la schema.org. 

Ambas propuestas merecen un articulo más detallado, pero sus alcances son muy interesantes, sobre todo si lo que se desea es generar contenido que sea amigable para los buscadores. Sin profundizar en el tema los patrones que proponen los Microformatos me gustan más ya que permite combinar la generación de CSS más semántico y HTML más fácil de leer tanto para los desarrolladores y los buscadores. 

Los diferentes formatos propuestos por Schema.org igual son interesantes, sobre todo por que contienen más patrones que pueden ser utilizados para diferentes tipos de contenidos (conciertos, recetas, información de negocio, etc). El hecho de que Google lo ocupe con mayor interés es algo que para muchos resulta muy tentador. 

Cualquiera que sea nuestra elección ayudara a generar un sitio web más amigable para los buscadores.

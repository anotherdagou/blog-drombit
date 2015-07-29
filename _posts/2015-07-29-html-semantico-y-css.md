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

Llevo escribiendo **CSS** por varios a&ntilde;os, conforme uno va escribiendo CSS o cualquier otro lenguaje, uno empieza a interesarse en conocer las mejores practicas, que permitan que tu c&oacute;digo sea m&aacute;s modular, m&aacute;s escalable, m&aacute;s f&aacute;cil de leer, m&aacute;s sem&aacute;ntico, etc.

Si tu intenci&oacute;n es desarrollar sitios web que permitan a los buscadores leer e interpretar el contenido de tu sitio, una de las mejores practicas es cuidar que el c&oacute;digo HTML que generas sea sem&aacute;ntico; utilizando las diferentes herramientas que tenemos a la mano: Etiquetas y propiedades de HTML5, Microformatos, Microdatos, RDFa, JSON-LD.

A la pregunta de: **&iquest;Afectan al SEO las clases CSS en el HTML?** En primera instancia la respuesta es no. Para los buscadores el nombre de las clases no afecta en como tu sitio web es le&iacute;do e interpretado por un buscador.

Por mucho tiempo, he evitado utilizar Frameworks como Bootstrap, debido a lo poco sem&aacute;ntico que para mi resultan las clases CSS que se utilizan para generar el layout de un sitio web. En sitios construidos con Bootstrap es com&uacute;n encontrarse c&oacute;digo como este:

```
<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1">
```

Para evitar este problema y tener un c&oacute;digo m&aacute;s sem&aacute;ntico y sencillo de entender utilizo [Neat](http://neat.bourbon.io/), el cual b&aacute;sicamente te permite usar menos clases de lado del HTML y manejar toda la l&oacute;gica del layout en el propio CSS. Cabe destacar que al d&iacute;a de hoy Bootstrap o Foundation ya cuentan con esta caracter&iacute;stica.

Este es un ejemplo de un layout generado con Neat:

<!--|%%|%7B%25%20highlight%20HTML%20linenos%25%7D|%%|-->

// HTML
<section><aside class="sidebar">What is it about?</aside><article class="main-content">Neat is an open source semantic grid framework built on top of Sass and Bourbon&hellip;</article></section>

// CSS .container { @include outer-container;

.sidebar { @include span-columns(6); } .main-content { @include span-columns(6); }

@include media(min-width: 768px) { .sidebar { @include span-columns(3); } .main-content { @include span-columns(9); } } }

<!--|%%|%7B%25%20endhighlight%20%25%7D|%%|-->

La [W3C](http://www.w3c.es/)(El Consorcio World Wide Web) recomienda como buena practica, [utilizar las clases teniendo en cuenta la sem&aacute;ntica](http://www.w3.org/QA/Tips/goodclassnames). Si bien estamos generando contenido m&aacute;s f&aacute;cil de leer e interpretar, esta forma de utilizar las clases, a los buscadores no les dicen nada.

Para poder escribir HTML m&aacute;s sem&aacute;ntico, que le permita a los buscadores conocer mejor la estructura y contenido de nuestro sitio, debemos de utilizar algunos est&aacute;ndares como los [Microformatos](http://microformats.org/) o [schema.org](http://schema.org/)(RDFa, Microdata y JSON-LD). Ambas iniciativas son compatibles con los buscadores m&aacute;s populares: Google, Yahoo y Bing.

## Microformatos

Como mencione al principio de esta entrada, los nombres de las clases que escribimos en nuestro c&oacute;digo HTML no afectan en como un buscador lee nuestro sitio web, sin embargo, hay un excepci&oacute;n y esas son los Microformatos. Los Microformatos son una serie de patrones que permiten estructurar el c&oacute;digo HTML para ser le&iacute;do e interpretado por los buscadores. Todo esto a trav&eacute;s de clases CSS. Aqu&iacute; podemos ver un ejemplo b&aacute;sico de un uso.

<!--|%%|%7B%25%20highlight%20HTML%20linenos%25%7D|%%|-->
<div class="h-card">![photo of Mitchell](https://webfwd.org/content/about-experts/300.mitchellbaker/mentor_mbaker.jpg) [Mitchell Baker](http://blog.lizardwrangler.com/) <span class="p-category">Profesor</span></div>

<!--|%%|%7B%25%20endhighlight%20%25%7D|%%|-->

Los microformatos establecen una serie de clases que permiten darle contexto a la informaci&oacute;n que estamos generando. El ejemplo de arriba presenta la informaci&oacute;n de una persona. las clases: `h-card, p-name, u-url, p-category` son clases que ayudan a los buscadores a entender la informaci&oacute;n que se genera. Las diferentes clases y caracter&iacute;sticas particulares de los Microformatos no ser&aacute;n tratados en esta entrada.

## Schema.org

Al igual que los ;icroformatos, schema.org es una comunidad que busca generar est&aacute;ndares para compartir informaci&oacute;n la cual puede ser le&iacute;da e interpretada por los buscadores, a diferencia de los ;icroformatos que utilizan las Clases CSS, schemas.org utiliza otros formatos como: RDFa, Microdata y JSON-LD. Un ejemplo parecido al ejemplo previamente escrito utilizando por ejemplo Microdata seria.

<!--|%%|%7B%25%20highlight%20HTML%20linenos%25%7D|%%|-->
<div itemscope="" itemtype="http://schema.org/Person">![photo of Mitchell](https://webfwd.org/content/about-experts/300.mitchellbaker/mentor_mbaker.jpg) <span itemprop="name">Mitchell</span> [Mitchell Baker](http://blog.lizardwrangler.com/) <span itemprop="jobTitle">Profesor</span></div>

<!--|%%|%7B%25%20endhighlight%20%25%7D|%%|-->

Schema.org parece ser un est&aacute;ndar m&aacute;s aceptado hoy en d&iacute;a, Google por ejemplo tiene una [secci&oacute;n especifica](https://developers.google.com/structured-data/) para sacarle el mayor provecho a los est&aacute;ndares propuestos por la schema.org.

Ambas propuestas merecen un articulo m&aacute;s detallado, pero sus alcances son muy interesantes, sobre todo si lo que se desea es generar contenido que sea amigable para los buscadores. Sin profundizar en el tema los patrones que proponen los Microformatos me gustan m&aacute;s ya que permite combinar la generaci&oacute;n de CSS m&aacute;s sem&aacute;ntico y HTML m&aacute;s f&aacute;cil de leer tanto para los desarrolladores y los buscadores.

Los diferentes formatos propuestos por Schema.org igual son interesantes, sobre todo por que contienen m&aacute;s patrones que pueden ser utilizados para diferentes tipos de contenidos (conciertos, recetas, informaci&oacute;n de negocio, etc). El hecho de que Google lo ocupe con mayor inter&eacute;s es algo que para muchos resulta muy tentador.

Cualquiera que sea nuestra elecci&oacute;n ayudara a generar un sitio web m&aacute;s amigable para los buscadores.
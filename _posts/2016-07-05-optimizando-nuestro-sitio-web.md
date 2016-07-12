---
layout: post
author: Diego
date: '2016-07-05 17:13 -0500'
categories: desarrollo
published: true
title: Optimizando nuestro sitio web
description: Pensamientos sobre la ultima actualización de nuestro sitio web.
tags:
  - css
  - html
---
Seas Experto o novato en escribir código CSS seguramente haz creado CSS tan endeble como una pila de tazas. Sabiendo que con cada taza que añadas a la pila la probabilidad de que la pila colapse aumentara. Lo mismo sucede con cada nueva linea de código que escribimos en un CSS con una base débil. 

![CSS]({{site.baseurl}}/uploads/stacked-espresso-cups.jpg)

Por suerte existen diferentes metodologías que nos permiten crear CSS modular, escalable, reutilizable y más sencillo de mantener. Algunas de las más populares son:

1. [OOCSS](http://oocss.org/)
2. [smacss](http://smacss.com/)
3. [suitcss](http://suitcss.github.io/)
4. [atomic](http://github.com/nemophrost/atomic-css)
5. [BEM](https://en.bem.info/methodology/)


**BEM** es mi favorita por lo descriptiva y sencilla que resulta. BEM se basa en tres conceptos:

- **Bloque**: representa una entidad única e independiente. Podríamos ver un bloque como un Componente dentro de la interfaz que deseamos construir. La union de uno o más bloques nos permiten crear interfaces de usuario más complejas.

- **Elemento**: representa la parte de un Bloque, la union de uno o más elementos nos permitirán crear un bloque.

- **Modificador**: representa una variación visual o de comportamiento de un bloque o elemento.


## Como escribir componentes en BEM

BEM establece escribir los bloques, elementos, y modificadores de la siguiente manera:

### Bloque
Para nombrar un bloque podemos utilizar: letras, dígitos o guiones.

| HTML                       | CSS          |
|----------------------------|--------------|
|`<div class="bloque"></div>`| `.bloque {…}`|

### Elemento
Para nombrar un elemento debemos utilizar dos guiones bajos `__` después del nombre del bloque

| HTML                                 | CSS                    |
|--------------------------------------|------------------------|
|`<div class="bloque__elemento"></div>`| `.bloque__elemento {…}`|

### Modificador
Para nombrar un modificador debemos utilizar dos guiones `--` después del nombre del bloque o elemento que deseamos modificar

| HTML                                      | CSS                         |
|-------------------------------------------|-----------------------------|
|`<div class="bloque--alt"></div>`          | `.bloque--alt {…}`          |
|`<div class="bloque__elemento--alt"></div>`| `.bloque__elemento--alt {…}`|

Bastante sencillo y descriptivo, ¿no te parece? De hecho para muchas personas llega a ser un poco molesto lo descriptivo que puede resultar esta forma de nombrar las cosas; ya que es normal encontrarse con nombres bastante largos.

## Ejemplo practico

Vamos a crear un componente que representa una lista de elementos con 3 diferentes estilos; utilizando la misma estructura HTML.

Insertar Imagen aqui

### Lista por defecto

Nuestro componente inicial esta compuesta de dos partes: nuestro bloque lista y los elementos de nuestra lista. 

```HTML
<ul class="list">
    <li class="list__item">Item</li>
    <li class="list__item">Item</li>
    <li class="list__item">Item</li>
    <li class="list__item">Item</li>
    <li class="list__item">Item</li> 
</ul>
```

```CSS
// Bloque 
.list { list-style-type: square;}

// Elemento
.list__item { margin-bottom: 4px; }
```

<p data-height="265" data-theme-id="0" data-slug-hash="akVyEX" data-default-tab="result" data-user="Anotherdago" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/Anotherdago/pen/akVyEX/">akVyEX</a> by Diego Armando Catalan Tandi (<a href="http://codepen.io/Anotherdago">@Anotherdago</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Lista Simple
Para nuestra siguiente lista necesitamos que desaparezca los iconos de la lista, adicionalmente vamos a eliminar el padding que por defecto nuestro componente tiene. Para esto vamos a necesitar crear un modificador de nuestro bloque principal.

```HTML
<ul class="list list--reset">
	<li class="list__item">Item</li>
    <li class="list__item">Item</li>
    <li class="list__item">Item</li>
    <li class="list__item">Item</li>
    <li class="list__item">Item</li> 
</ul>
```

```CSS
/* Bloque */ 
.list { list-style-type: square; }

/* Elemento*/
.list__item { margin-bottom: 4px; }

/* Modificador*/
.list--reset {
	list-style-type: none;
  	padding: 0;
}
```
<p data-height="265" data-theme-id="0" data-slug-hash="jAaLZk" data-default-tab="result" data-user="Anotherdago" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/Anotherdago/pen/jAaLZk/">jAaLZk</a> by Diego Armando Catalan Tandi (<a href="http://codepen.io/Anotherdago">@Anotherdago</a>) on <a href="http://codepen.io">CodePen</a>.</p>

### Lista con bordes
Para nuestra siguiente lista, vamos a darle un estilo de tal manera que los elementos de nuestra lista tengan un borde en la parte inferior. Para ello vamos a crear un modificador del elemento de nuestro bloque.

```
<ul class="list list--reset">
  <li class="list__item list__item--underline">Item</li>
  <li class="list__item list__item--underline">Item</li>
  <li class="list__item list__item--underline">Item</li>
  <li class="list__item list__item--underline">Item</li>
  <li class="list__item list__item--underline">Item</li> 
</ul>
```	

```CSS
/* Bloque */ 
.list { list-style-type: square; }

/* Elemento*/
.list__item { margin-bottom: 4px; }

/* Modificador*/
.list--reset {
  list-style-type: none;
  padding: 0;
}

.list__item--underline { border-bottom: 1px solid; }
```
<p data-height="265" data-theme-id="0" data-slug-hash="NAwvZw" data-default-tab="result" data-user="Anotherdago" data-embed-version="2" class="codepen">See the Pen <a href="http://codepen.io/Anotherdago/pen/NAwvZw/">NAwvZw</a> by Diego Armando Catalan Tandi (<a href="http://codepen.io/Anotherdago">@Anotherdago</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


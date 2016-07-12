---
layout: post
author: Diego
date: '2016-07-05 17:13 -0500'
categories: desarrollo
published: false
title: Optimizando nuestro sitio web
description: Pensamientos sobre la ultima actualización de nuestro sitio web.
tags:
  - css
  - html
---
> Escribir CSS es facil. Escribir CSS modular, escalable, reutilizable y facil de mantener es lo complicado.

Seas Experto o novato en el tema, alguna vez haz creado CSS tan endeble como una pila de tazas. Con cada taza que se añada a la pila la probabilidad de que la pila colapse aumentara. Lo mismo sucede con cada nueva linea de código que escribimos en un CSS con una base debil.

![CSS]({{site.baseurl}}/uploads/stacked-espresso-cups.jpg)

Por suerte existen diferentes metodologias que nos permiten crear CSS modular, escalable, reutilizable y más sencillo de mantener. Algunas de las más populares son:

1. [OOCSS](http://oocss.org/)
2. [smacss](http://smacss.com/)
3. [suitcss](http://suitcss.github.io/)
4. [atomic](http://github.com/nemophrost/atomic-css)
5. [BEM](https://en.bem.info/methodology/)


**BEM** es mi favorita por lo descriptiva y sencilla que resulta. BEM se basa en tres elementos:

- **Bloque**: represanta una entidad unica. Podríamos ver un bloque como un Componente dentro de la interfaz que deseamos construir. La union de uno o más bloques nos permiten crear interfaces de usuario más complejas.

- **Elemento**: representa la parte de un Bloque, la union de uno o más elementos nos permitiran crear un bloque.

- **Modificador**: representa una variación visual o de comportamiento de un bloque o elemento.

## Como escribir componentes en BEM

BEM establace escribir los bloques, elementos, y modificadores de la siguiente manera:

### Bloque
Para nombrar un boque podemos utilizar: letras, digitos o guiones.

| HTML                       | CSS          |
|----------------------------|--------------|
|`<div class="bloque"></div>`| `.bloque {…}`|

### Elemento
Para nombrar un elemento debemos utilizar dos guiones bajos `__` despues del nombre del bloque

| HTML                                 | CSS                    |
|--------------------------------------|------------------------|
|`<div class="bloque__elemento"></div>`| `.bloque__elemento {…}`|

### Modificador
Para nombrar un modificador debemos utilizar dos guiones `--` despues del nombre del bloque o elemento que deseamos modificar

| HTML                                      | CSS                         |
|-------------------------------------------|-----------------------------|
|`<div class="bloque--alt"></div>`          | `.bloque--alt {…}`          |
|`<div class="bloque__elemento--alt"></div>`| `.bloque__elemento--alt {…}`|

Bastante sencillo y descriptivo ¿no te parece? De hecho para muchas personas llega a ser un poco molesto lo descriptivo que puede resultar esta forma de nombrar las cosas; ya que es normal encontrarse con bloques, elementos y modificadores con una langitud larga de caracteres.




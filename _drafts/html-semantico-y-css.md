---
layout: post
title: HTML Semántico Y CSS
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

Si tu intenci&oacute;n es desarrollar sitios web que sean facilmente indexables por los buscadores y permitan explotar todas sus caracteristicas debes de cuidar que el c&oacute;digo HTML que generas sea semantico. Valiendote de las diferentes etiquetas que HTML5 nos ofrece.

Cuando desarrollas sitios o aplicaciones web es muy comun estar escribiendo una y otra vez los bloques basicos de un sitio: botones, listas, grid, etc. Para agilizar este proceso lo m&aacute;s comun es utilizar algun Framework que nos ayude a comenzar con una base solida.

En lo personal nunca he utilizado dos de los frameworks m&aacute;s populares [Bootstrap](http://getbootstrap.com/) y [Foundation](http://foundation.zurb.com/index.html). Esta desici&oacute;n esta basada principalmente en dos motivos:

*   Sistema Grid utilizado para el layout de las paginas.
*   Estilos predifinidos de los elementos.

Si hablamos del sistema de Grid que por ejemplo Bootstrap maneja podriamos encontrar ejemplos como este:

```
<div class="bs-docs-grid">
    <div class="row show-grid">
      <div class="col-xs-12 col-md-8">.col-xs-12 .col-md-8</div>
      <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
    </div>
    <div class="row show-grid">
      <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
      <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
      <div class="col-xs-6 col-md-4">.col-xs-6 .col-md-4</div>
    </div>
    <div class="row show-grid">
      <div class="col-xs-6">.col-xs-6</div>
      <div class="col-xs-6">.col-xs-6</div>
    </div>
  </div>
```
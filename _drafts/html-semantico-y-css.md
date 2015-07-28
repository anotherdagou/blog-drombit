---
layout: post
title: Afectan al SEO las clases CSS en el HTML
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

## Afectan al SEO las clases CSS en el HTML

La respuesta rapida es no. Para los b&uacute;scadores el nombre de las clases no afecta en como tu sitio web es leido por un buscador. Por mucho tiempo he evitado utilizar Frameworks como Bootstrap devido a lo poco semantico que para mi resultan las clases CSS que se utilizan para generar el layout de un sitio web. Es comun encontrarse c&oacute;digo como este:

```
<div class="col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-10 col-lg-offset-1">
```

Para evitar ese problema y tener un c&oacute;digo m&aacute;s semantico y sencillo de entender utilizo [Bourbon](http://neat.bourbon.io/) el cual b&aacute;sicamente te permite generar CSS m&aacute;s semantico, ya que uno puede definir el nombre de una clase sencilla